// @flow


/**
 * Set Tracking Data to window data layer
 * @param {CallbackData} trackingOptions
 */
const setDataLayer = ({ initialConfigs, data, type }) => {
  // $FlowFixMe eslint-disable-line
  if (process.browser) {
    window.dataLayer = { ...initialConfigs, ...data, type };
  }
};

export default setDataLayer;
