// @flow

import React, { Component } from 'react';

import logger from './logger';

export default function(WrappedComponent) {
  return class errorBoundaryComponent extends Component {
    /* eslint-disable class-methods-use-this */
    // cors check from reviewer
    componentDidCatch(error, info) {
      logger.error('error', JSON.stringify(`App failed to load with errors: ${error}`));
      logger.info('info', JSON.stringify(info));
    }
    /* eslint-enable class-methods-use-this */

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
