import React from 'react';
//components
import JumbotronSlider from './JumbotronSlider';
import MenuShort from './../Menu/MenuShort';
import AboutUsShort from './../AboutUs/AboutUsShort';
import ReservationFormAdmin from './../ReservationForm/ReservationFormAdmin';
import Contact from './../Contact/Contact';
import SeoHelmet from './../utils/SeoHelmet';

const LandingPage = () => {
  return (
    <React.Fragment>
      <SeoHelmet
        title='Emilio Restauracja'
        description='Emilio Restauracja, najlepsza kuchnia włoska w Szczecinie!
        Restauracja emilio, kuchnia włoska, włoskie smaki, restauracja szczecin.'
        imageUrl='http://www.emiliorestauracja.com/1%20(16).jpg'
        imageAlt='Restauracja Emilio'
      />
      <JumbotronSlider />
      <MenuShort />
      <AboutUsShort />
      <ReservationFormAdmin />
      <Contact />
    </React.Fragment>
  );
};

export default LandingPage;
