/**
 *
 * FeatureBanner
 *
 *  */

// @flow
import React, { PureComponent } from 'react';
import styles from './FeatureBanner.style';
import withStyles from '../../../lib/withStyles';


class FeatureBanner extends PureComponent {
  render() {
    const { className, heading, subheading } = this.props;
    return (
      <article className={className}>
        <div className="inner">
          <h1>{heading}</h1>
          {subheading && <div className="subheading">{subheading}</div>}
        </div>
      </article>
    );
  }
}
export default withStyles(FeatureBanner, styles);
export { FeatureBanner };
