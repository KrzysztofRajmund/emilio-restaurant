import React from "react";
//router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//components
import Navigation from './Navigation';
import FooterComponent from "./FooterComponent";
import LandingPage from './LandingPage';
import AboutUs from './../AboutUs/AboutUs';
import Contact from './../Contact/Contact';
import Menu from './../Menu/Menu';
import ReservationForm from './../ReservationForm/ReservationForm';


const EmilioApp = () => {
  return (
    <Router>
      {/* <Navigation /> */}
      <Switch>
        <Route path="/onas">
          <AboutUs />
        </Route>
        <Route path="/kontakt">
          <Contact />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/rezerwacja">
          <ReservationForm />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
      <FooterComponent />
    </Router>
  );
};

export default EmilioApp;
