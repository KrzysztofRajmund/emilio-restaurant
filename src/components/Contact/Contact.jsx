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
            <address className='form__content'>
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
