import React from 'react';
//router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import FooterComponent from './FooterComponent';
import LandingPage from './LandingPage';
import AboutUs from './../AboutUs/AboutUs';
import RestaurantGallery from './../RestaurantGallery/RestaurantGallery';
import Contact from './../Contact/Contact';
import Menu from './../Menu/Menu';
import ReservationFormAdmin from './../ReservationForm/ReservationFormAdmin';
import ScrollButton from './ScrollButton';
import ThemeContext from './../utils/ThemeContext';
//components ADMIN
import Login from './../AdminPanel/Login';
import Admin from './../AdminPanel/Admin';
//json
import tileData from '../../tileData';

const themes = tileData;

const EmilioApp = () => {
  return (
    <ThemeContext.Provider value={themes}>
      <Router>
        <Switch>
          <Route path='/galeria'>
            <RestaurantGallery />
          </Route>
          <Route path='/onas'>
            <AboutUs />
          </Route>
          <Route path='/kontakt'>
            <Contact />
          </Route>
          <Route path='/menu'>
            <Menu />
          </Route>
          <Route path='/rezerwacja'>
            <ReservationFormAdmin />
          </Route>
          {/* ADMIN PANEL */}
          <Route path='/adminpanel/login'>
            <Login />
          </Route>
          {/* <Route path='/adminpanel/admin'>
            <Admin />
          </Route> */}
          {/* ADMIN PANEL */}
          <Route path='/'>
            <LandingPage />
          </Route>
        </Switch>
        <ScrollButton />
        <FooterComponent />
      </Router>
    </ThemeContext.Provider>
  );
};

export default EmilioApp;
