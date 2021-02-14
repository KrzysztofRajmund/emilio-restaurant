import React, { useEffect } from 'react';
//components
import MapContact from './MapContact';
import HeaderJumbotron from '../Home/HeaderJumbotron';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 800,
    });
  }, []);
  return (
    <React.Fragment>
      {window.location.pathname === '/kontakt' ? <HeaderJumbotron /> : ''}
      <div className='contact'>
        {window.location.pathname === '/kontakt' ? (
          <div className='contact__card-content'>
            <address className='contact__content'>
              <h1>Zadzwoń</h1>
              <h5>
                <a href='tel:048-508-224-177'>+48 508 224 177</a>
              </h5>
              <h1>Napisz</h1>
              <h5>
                <a href='mailto:info@restauracjaemilio.pl?&subject=Emilio Rezerwacja&body=Jak możemy pomóc?'>
                  info@restauracjaemilio.pl
                </a>
              </h5>
              <h1>Odwiedź nas</h1>
              <h5>
                <a
                  href='https://www.google.com/maps/place/Restauracja+Emilio/@53.4318187,14.5489302,17z/data=!4m12!1m6!3m5!1s0x47aa099b0e0aa2cb:0x95950039c596143b!2sRestauracja+Emilio!8m2!3d53.431735!4d14.548714!3m4!1s0x47aa099b0e0aa2cb:0x95950039c596143b!8m2!3d53.431735!4d14.548714'
                  target='_blank'
                >
                  <span>Jana Pawła II 43</span>
                  <span>Szczecin 70-415</span>
                </a>
              </h5>
            </address>
          </div>
        ) : (
          ''
        )}
        <div className='contact__card-map'>
          <div className='contact__content'>
            <MapContact />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
