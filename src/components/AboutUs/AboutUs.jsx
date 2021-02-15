import React, { useEffect, useState, useContext } from 'react';
//components
import Gallery from './Gallery';
import HeaderJumbotron from '../Home/HeaderJumbotron';
//assets
import Logo from '../../assets/logo.png';
import RestaurantImage from '../../assets/restaurant-image.jpg';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 800,
    });
  }, []);

  return (
    <React.Fragment>
      {window.location.pathname === '/onas' ? <HeaderJumbotron /> : ''}
      <div className='about' id='about'>
        <article className='titles-container'>
          <div
            className='titles-container__animation'
            id='box'
            data-aos='fade-left'
          >
            <img src={Logo} alt='logo' width='90px' height='auto' />
            <h2>Nasza historia</h2>
            <h5 className='titles-container__subtitle'>
              Rodzinna kuchnia włoska
            </h5>
          </div>
        </article>
        <div className='about__card-container' data-aos='zoom-in'>
          <div className='about__card-text'>
            <h4 className='description'>
              Fue sus puertas al público en su antiguo local de la calle
              Cantuarias en Miraflores. Hoy, en tiempos de quedarnos en casa,
              hemos preparado una selección de los platos que fueron parte de la
              historia nuestro restaurante a lo largo de los últimos 26 años.
              Platos sabrosos que seguro despertarán la nostalgia en aquellos
              que nos acompañaron durante nuestra vida, dedicada a intentar
              hacerlos felices cada vez que nos visitaron.
            </h4>
          </div>
          <div className='about__card-image'>
            <img src={RestaurantImage} alt='restaurant-image' />
          </div>
        </div>
      </div>
      <Gallery />
    </React.Fragment>
  );
};

export default AboutUs;
