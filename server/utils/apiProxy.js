/* eslint-disable no-param-reassign */
const proxy = require('http-proxy-middleware');
const { PROTOCOL_HTTPS, ENV_DEVELOPMENT } = require('../../isomorphic/constants');
const agent = require('./proxyAgent');
const path = require('path');
const dotenv = require('dotenv');


const envVars = dotenv.config({
  path: path.resolve(
    __dirname,
    `..${path.sep}..${path.sep}env${path.sep}${process.env.NODE_ENV || ENV_DEVELOPMENT}.env`
  ),
}).parsed;
console.log('envVars-----------', envVars);
const { API_DOMAIN } = envVars;
const domainProtocol = API_DOMAIN.split(':')[0];
const isMock = process.argv.indexOf('--mock') !== -1;
/**
 * Settings for request agent (keep alive)
 * (externalized through environment variables)
 */

// Assign agent as per protocol of API domain
const proxyAgent = domainProtocol === PROTOCOL_HTTPS && !isMock ? agent.https : agent.http;

// proxy middleware options
const apiProxy = proxy({
  agent: proxyAgent,
  target: isMock ? envVars.MOCK_API_DOMAIN : envVars.API_DOMAIN, // target host
  pathRewrite: { '^/api': '' },
  logLevel: 'debug',
  changeOrigin: true, // for vhosted sites
  headers: {
    'x-api-key.': envVars.API_SECRET_KEY,
  },
  onError: (err, req, res) => {
    res.status(500).send({
      success: false,
      error: err,
    });
  },
  proxyTimeout: parseInt(envVars.API_TIMEOUT, 10),
});

module.exports = apiProxy;
