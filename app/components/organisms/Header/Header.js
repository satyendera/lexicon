// @flow
/**
 * Header
 */
import React from 'react';

import Link from 'next/link';

import NavBar from '../../molecules/NavBar';

const Header = ({ nav, className }) => (
  <div className={className}>
    <header id="header">
      <Link href="/">
        <a href="/" className="logo">
          Logo
        </a>
      </Link>
      {nav && <NavBar items={nav} />}
    </header>
  </div>
);

Header.defaultProps = {};

export default Header;
