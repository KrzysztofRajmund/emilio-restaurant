import React from 'react';
//bootstrap
import { Nav, Navbar } from 'react-bootstrap';
//router
import { NavLink } from 'react-router-dom';

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
