import React from 'react';
//bootstrap
import { Nav, Navbar } from 'react-bootstrap';
//router
import { Link, NavLink } from 'react-router-dom';
//assets
import Logo from '../../assets/logo-white.png';
import Burger from '../../assets/burger.png';
import Facebook from '../../assets/facebook-white.png';
import Instagram from '../../assets/instagram-white.png';

const HeaderNav = ({ user }) => {
  return (
    <Navbar id='nav' className='navigation admin-headernav' expand='lg'>
      <Nav className='ml-auto navigation__nav-container'>
        <NavLink className='navigation__nav-link' to='/menu'>
          Witaj {user.charAt(0).toUpperCase() + user.slice(1, user.length)}
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default HeaderNav;
