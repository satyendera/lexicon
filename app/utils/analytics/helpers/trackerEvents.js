// @flow

import { getTracker } from './initTracker';

const { instance } = getTracker();

export const trackActions = ({ type, data }) => {
  if (!type) {
    throw new ReferenceError('Define type for tracker.');
  }

  return instance.trackEvent({
    type,
    data,
  });
};

export default { trackActions };
