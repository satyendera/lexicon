// @flow

import { Tracker } from 'react-tracker';


const trackerConfig = {};

export const executeListners = () => {
  const { instance, callback, initialConfigs } = trackerConfig;
  if (!initialConfigs || !callback) {
    throw new ReferenceError(
      'Tracker Config missing. Use setTrackerConfig() to set tracker config on application bootstrap'
    );
  }
  instance.on('*', (event) => {
    const { type, data } = event;

    callback({ initialConfigs: { ...initialConfigs }, data: { ...data }, type });
  });
};

export const setTrackerConfig = ({ initialConfigs, actions, callback }) => {
  trackerConfig.initialConfigs = initialConfigs;
  trackerConfig.actions = actions;
  trackerConfig.callback = callback;
  executeListners();
};

export const getTracker = () => {
  if (!trackerConfig.instance) {
    trackerConfig.instance = new Tracker();
  }
  return trackerConfig;
};
