// @flow
import React from 'react';
import Layout from '../Layout';
import HeadTag from '../../atoms/HeadTag';
import TopBanner from '../../molecules/TopBanner';
import withStyles from '../../../lib/withStyles';
import styles from './HomePage.style';
import ArticleWrap from '../../../containers/molecules/ArticleWrap';
// import reactLogo from '/static/images/logo/react.jpg';

const HomePage = ({ editorialData }) => {
  const { Provider } = editorialData;
 

  

  return (
   
    <Layout title="home" className="row" id="content-wrapper" >
      <HeadTag
        description="Next JS BoilerPlate - accelerator for server side rendered react applications"
        title="Lexicon Code Challenge"
      />
      <TopBanner title="Universal React" subTitle={Provider}  />
      <section className="main-wrapper">

      <ArticleWrap title={Provider}  className="tech-dependency">
         
        </ArticleWrap>
       


       
       
       
        
      </section>
    </Layout>
  );
};

HomePage.defaultProps = {
  seoData: {
    description: 'Home Page Description',
    title: 'Home page',
  },
  editorialData: {},
};

export default withStyles(HomePage, styles);
export { HomePage };
