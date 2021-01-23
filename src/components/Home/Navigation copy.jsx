import React from "react";
//bootstrap
import { Nav, Navbar } from "react-bootstrap";
//router
import {  Link } from "react-router-dom";
//assets
import Logo from "../../assets/logo.png"
import Burger from "../../assets/burger.png"

const Navigation = () => {
  return (
    <Navbar className="navigation" expand="lg">
      <Navbar.Brand className="navigation__brand" href="#home"><img src={Logo} alt="logo" width="60px" height="auto"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"><img width="30px" height="30px" src={Burger} alt="burger"/></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navigation__nav-container">
        <Link className="navigation__nav-link" to="/menu">
            Menu
        </Link>
        <Link className="navigation__nav-link" to="/onas">
            O Nas
        </Link>
        <Link className="navigation__nav-link" to="/rezerwacja">
            Rezerwacja
        </Link>
        <Link className="navigation__nav-link" to="/kontakt">
            Kontakt
        </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
