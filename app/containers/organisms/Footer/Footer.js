// @flow
import React from 'react';

import get from 'lodash/get';
import { connect } from 'react-redux';


import FooterComponent from '../../../components/organisms/Footer';

const Footer = (props) => <FooterComponent {...props} />;

const mapStateToProps = state => ({
  moviesList: get(state, ['global', 'globalData', 'MoviesList']),
});

export default connect(mapStateToProps)(Footer);
