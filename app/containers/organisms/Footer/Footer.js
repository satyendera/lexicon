// @flow
import React from 'react';

import get from 'lodash/get';
import { connect } from 'react-redux';


import FooterComponent from '../../../components/organisms/Footer';

const Footer = (props) => <FooterComponent {...props} />;

const mapStateToProps = state => ({
  nav: get(state, ['global', 'globalData', 'labels', 'header', 'nav']),
});

export default connect(mapStateToProps)(Footer);
