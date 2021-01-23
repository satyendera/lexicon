// @flow
import React from 'react';
import styles from './Title.style';
import withStyles from '../../../lib/withStyles';



const Title = ({ children, className, inheritedStyles, ...others }) => (
  <h1 className={className} {...others}>
    {children}
  </h1>
);

Title.defaultProps = {
  inheritedStyles: '',
};

export default withStyles(Title, styles);
export { Title as TitleVanilla };
