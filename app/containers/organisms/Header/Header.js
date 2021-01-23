// @flow
import React from 'react';

import get from 'lodash/get';
import { connect } from 'react-redux';


import HeaderComponent from '../../../components/organisms/Header';

const Header = (props) => <HeaderComponent {...props} />;

const mapStateToProps = state => ({
  nav: get(state, ['homePage', 'layout', 'editorialData', 'header', 'nav']),
});

export default connect(mapStateToProps)(Header);
