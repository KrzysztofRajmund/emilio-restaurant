import React from "react";
//bootstrap
import { Nav, Navbar } from "react-bootstrap";
//router
import {  Link } from "react-router-dom";
//assets
import Logo from "../../assets/logo.png";
import Burger from "../../assets/burger.png";
import Facebook from "../../assets/facebook-white.png";
import Instagram from "../../assets/instagram-white.png";

const Navigation = () => {

  const scrollTop = () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <Navbar className="navigation" expand="lg" sticky="top" >
      <Navbar.Brand className="navigation__brand" href="/"><img src={Logo} alt="logo" width="60px" height="auto"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"><img width="30px" height="30px" src={Burger} alt="burger"/></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navigation__nav-container">
        <Link className="navigation__nav-link" to="/menu" onClick={scrollTop}>
            Menu
        </Link>
        <Link className="navigation__nav-link" to="/onas" onClick={scrollTop}>
            O Nas
        </Link>
        <Link className="navigation__nav-link" to="/rezerwacja" onClick={scrollTop}>
            Rezerwacja
        </Link>
        <Link className="navigation__nav-link" to="/kontakt" onClick={scrollTop}>
            Kontakt
        </Link>
        <a className="navigation__nav-link" href="https://www.facebook.com/EmilioRestaurantSzczecin" target="_blank">
        <img width="25px" height="25px" src={Facebook} alt="facebook"/>
        </a>
        <a className="navigation__nav-link" href="https://www.instagram.com/restauracja.emilio.szczecin/" target="_blank">
        <img width="25px" height="25px" src={Instagram} alt="instagram"/>
        </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
