/**
 *
 * ArticleWrap
 *
 *  */

// @flow
import React, { PureComponent } from 'react';

import styles,{MovieTileContainer,MovieWrapper,MainContainer} from './ArticleWrap.style';
import withStyles from '../../../lib/withStyles';
import NotFound from '../NotFound';



class ArticleWrap extends PureComponent {
  
  render() {
    const { title, children, isLeft, subtitle,Movies } = this.props;
    let { className } = this.props;
    let containerClass = 'container-wrap';
    if (isLeft) {
      className = className ? `${className.toString()} text-left` : 'text-left';
      containerClass = containerClass ? `${containerClass} m-t-30` : 'm-t-30';
    }

   
    

    return (
      <MainContainer>
      <div className={className}>
        
     <MovieWrapper>
        
        {Movies ? Movies.map((movie, count) => (
           <MovieTileContainer> 
             <img
           
            className={className}
            alt={movie.Title}
            src={movie.Poster}
            
          /> </MovieTileContainer>
          
        )):(
          <NotFound></NotFound>
        )}
     

      

        <div className="inner">
          <h2>{title}</h2>
          {subtitle && <div className="sub-heading">{subtitle}</div>}
          <div className={containerClass}>{children}</div>
        </div>
       </MovieWrapper>
       </div>
       </MainContainer>
    );
  }
}
export default withStyles(ArticleWrap, styles);
export { ArticleWrap };
