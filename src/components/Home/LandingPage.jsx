import React from 'react';
//components
import JumbotronSlider from './JumbotronSlider';
import MenuShort from './../Menu/MenuShort';
import AboutUsShort from './../AboutUs/AboutUsShort';
import ReservationForm from './../ReservationForm/ReservationForm';
import Contact from './../Contact/Contact';

const LandingPage = () => {
  return (
    <React.Fragment>
      <JumbotronSlider />
      <MenuShort />
      <AboutUsShort />
      <ReservationForm />
      <Contact />
    </React.Fragment>
  );
};

export default LandingPage;
