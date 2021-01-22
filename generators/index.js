/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const componentGenerator = require('./component/index.js');
const containerGenerator = require('./container/index.js');

module.exports = plop => {
  plop.setGenerator('components', componentGenerator);
  plop.setGenerator('containers', containerGenerator);
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
