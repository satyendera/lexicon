
/*
 * To get Env Variables 
 */
import getConfig from 'next/config';

const { publicRuntimeConfig = {} } = getConfig() || {};
const { env =  {} } = publicRuntimeConfig;
export default { ...process.env, ...env };