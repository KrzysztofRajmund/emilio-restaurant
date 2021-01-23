import React from "react";
//components
import JumbotronSlider from "./JumbotronSlider";
import MenuShort from './../Menu/MenuShort';
import AboutUs from './../AboutUs/AboutUs';
import AboutUs2 from './../AboutUs/AboutUs2';
import ReservationForm from './../ReservationForm/ReservationForm';
import Contact from './../Contact/Contact';



const LandingPage = () => {
  return (
    <React.Fragment>
      <JumbotronSlider />
      <MenuShort />
      <AboutUs />
      {/* <AboutUs2 /> */}
      <ReservationForm />
      <Contact />
    </React.Fragment>
  );
};

export default LandingPage;
