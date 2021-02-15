import React, { useEffect } from 'react';
//components
import HeaderJumbotron from '../Home/HeaderJumbotron';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const ReservationForm = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 2000,
    });
  }, []);

  return (
    <React.Fragment>
      {window.location.pathname === '/rezerwacja' ? <HeaderJumbotron /> : ''}
      <div className='form-container'>
        <div className='form-container__input' data-aos='fade-left'>
          <form>
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
            </address>
          </form>
        </div>
        <div className='form-container__card' data-aos='fade-right'>
          <div className='form-container__text'>
            <h1>Rezerwacja</h1>
            <h5>
              For parties of six or more, we recommend making reservations at
              least two weeks in advance. For walk-ins, we only seat parties on
              a first come, first served basis.
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReservationForm;
