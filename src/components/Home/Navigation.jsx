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

const Navigation = () => {
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const changeColor = () => {
    const navbar = document.getElementById('nav');
    navbar.classList.toggle('colorNav');
  };

  return (
    <Navbar id='nav' className='navigation' expand='lg'>
      <Navbar.Brand className='navigation__brand' href='/'>
        <img src={Logo} alt='logo' width='60px' height='auto' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' onClick={changeColor}>
        <img width='30px' height='30px' src={Burger} alt='burger' />
      </Navbar.Toggle>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto navigation__nav-container'>
          <NavLink
            className='navigation__nav-link'
            to='/menu'
            onClick={scrollTop}
            activeStyle={{
              borderBottom: '2px solid #73aea59a',
              fontWeight: 'bold',
              color: '#73aea5',
            }}
          >
            Menu
          </NavLink>
          <NavLink
            className='navigation__nav-link'
            to='/onas'
            onClick={scrollTop}
            activeStyle={{
              borderBottom: '2px solid #73aea59a',
              fontWeight: 'bold',
              color: '#73aea5',
            }}
          >
            O Nas
          </NavLink>
          <NavLink
            className='navigation__nav-link'
            to='/rezerwacja'
            onClick={scrollTop}
            activeStyle={{
              borderBottom: '2px solid #73aea59a',
              fontWeight: 'bold',
              color: '#73aea5',
            }}
          >
            Rezerwacja
          </NavLink>
          <NavLink
            className='navigation__nav-link'
            to='/galeria'
            onClick={scrollTop}
            activeStyle={{
              borderBottom: '2px solid #73aea59a',
              fontWeight: 'bold',
              color: '#73aea5',
            }}
          >
            Galeria
          </NavLink>
          <NavLink
            className='navigation__nav-link'
            to='/kontakt'
            onClick={scrollTop}
            activeStyle={{
              borderBottom: '2px solid #73aea59a',
              fontWeight: 'bold',
              color: '#73aea5',
            }}
          >
            Kontakt
          </NavLink>
          <a
            className='navigation__nav-link'
            href='https://www.facebook.com/EmilioRestaurantSzczecin'
            target='_blank'
          >
            <img width='25px' height='25px' src={Facebook} alt='facebook' />
          </a>
          <a
            className='navigation__nav-link'
            href='https://www.instagram.com/restauracja.emilio.szczecin/'
            target='_blank'
          >
            <img width='25px' height='25px' src={Instagram} alt='instagram' />
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
