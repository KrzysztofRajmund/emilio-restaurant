import React, { useEffect, useState, useContext } from 'react';
//components
import Album from './Album';
//assets
import Logo from '../../assets/logo.png';
import RestaurantImage from '../../assets/restaurant-image.jpg';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUsShort = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 800,
    });
  }, []);

  return (
    <React.Fragment>
      <div className='about' id='about'>
        <article className='titles-container'>
          <div
            className='titles-container__animation'
            id='box'
            data-aos={window.innerWidth < 770 ? 'zoom-in-down' : 'fade-left'}
          >
            <img src={Logo} alt='logo' width='90px' height='auto' />
            <h2>Rodzinna kuchnia włoska</h2>
            <h5 className='titles-container__subtitle'>
              La qualità è la nostra passione
            </h5>
          </div>
        </article>
        <div className='about__card-container' data-aos='zoom-in'>
          <div className='about__card-text'>
            <h4 className='description'>
              <strong>
                <i> La qualità è la nostra passione - Jakość to nasza pasja!</i>
              </strong>
              <p>
                Obok Alei Fontann, tuż za plecami szczecińskiego Marynarza
                Sternika, w samym sercu miasta, w ciągu spacerowym na odcinku od
                placu Grunwaldzkiego do placu Lotników jest smaczne, kameralne i
                przyjemnie urządzone miejsce – restauracja Emilio, gdzie jakość
                włoskich przypraw, oliwy, chleba, wina oraz radość i zadowolenie
                gości jest jedyną pasją, którą mają w życiu gospodarze tego
                przepysznego i porywającego punktu na kulinarnej mapie
                Szczecina. „Na gości, którzy zawitają do Emilio czekają
                niebywałe doznania kulinarne. Nasza kuchnia opiera się głównie
                na składnikach, które sprowadzamy do Szczecina prosto z
                najróżniejszych włoskich regionów. Najwyższej jakości produkty i
                nietuzinkowe połączenia smakowe są odzwierciedleniem pasji, z
                jaką tworzone są nasze dania.”
              </p>
              <strong>
                <i>Rodzina Emilio</i>
              </strong>
            </h4>
          </div>
          <div className='about__card-image'>
            <img src={RestaurantImage} alt='restaurant-image' />
          </div>
        </div>
      </div>
      <Album />
    </React.Fragment>
  );
};

export default AboutUsShort;
