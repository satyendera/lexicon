/**
 *
 * ArticleWrap
 *
 *  */

// @flow
import React, { PureComponent } from 'react';

import styles,{MainContainer} from './NotFound.style';
import withStyles from '../../../lib/withStyles';



class NotFound extends PureComponent {
  
  render() {
    return (
      <MainContainer>
      <img src="/static/images/logo/next.png" alt="not Found"/>
    </MainContainer>
    );
  }
}
export default withStyles(NotFound, styles);
export { NotFound };
