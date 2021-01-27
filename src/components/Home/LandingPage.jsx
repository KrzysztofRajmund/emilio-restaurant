import React from "react";
//components
import JumbotronSlider from "./JumbotronSlider";
import MenuShort from './../Menu/MenuShort';
import AboutUs from './../AboutUs/AboutUs';
import ReservationForm from './../ReservationForm/ReservationForm';
import Contact from './../Contact/Contact';
import ScrollButton from "./ScrollButton";



const LandingPage = () => {
  return (
    <React.Fragment>
      <JumbotronSlider />
      <MenuShort />
      <AboutUs />
      <ReservationForm />
      <Contact />
      <ScrollButton/>
    </React.Fragment>
  );
};

export default LandingPage;
