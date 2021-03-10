import React from 'react';
//components
import JumbotronSlider from './JumbotronSlider';
import MenuShort from './../Menu/MenuShort';
import AboutUsShort from './../AboutUs/AboutUsShort';
import ReservationForm from './../ReservationForm/ReservationForm';
import Contact from './../Contact/Contact';
import SeoHelmet from './../SeoHelmet';

const LandingPage = () => {
  return (
    <React.Fragment>
      <SeoHelmet
        title='Restauracja Emilio'
        description='Emilio Restauracja, najlepsza kuchnia włoska w Szczecinie!
        Restauracja emilio, kuchnia włoska, włoskie smaki, restauracja szczecin.'
      />
      <JumbotronSlider />
      <MenuShort />
      <AboutUsShort />
      <ReservationForm />
      <Contact />
    </React.Fragment>
  );
};

export default LandingPage;
