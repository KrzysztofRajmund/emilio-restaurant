import React, { useEffect } from 'react';
//components
import HeaderJumbotron from '../Home/HeaderJumbotron';
import SeoHelmet from './../SeoHelmet';
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
  console.log(window.innerWidth, 'window width');

  return (
    <React.Fragment>
      <SeoHelmet
        title='Kuchnia Włoska'
        description='Restauracja Szczecin, kuchnia włoska. Restauracja, restauracja szczecin, włoskie smaki.'
      />
      {window.location.pathname === '/rezerwacja' ? <HeaderJumbotron /> : ''}
      <div className='form-container' id='rezerwacja'>
        <div
          className='form-container__input'
          data-aos={window.innerWidth < 770 ? 'flip-left' : 'zoom-in-right'}
          // data-aos='new-animation'
        >
          <form>
            <address className='contact__content'>
              <h1>Zadzwoń</h1>
              <h5>
                <a href='tel:+48-508-224-177'>+48 508 224 177</a>
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
        <div
          className='form-container__card'
          data-aos={window.innerWidth < 770 ? 'zoom-in' : 'zoom-in-left'}
        >
          <div className='form-container__text'>
            <h1>Rezerwacja</h1>
            <h5>
              W przypadku spotkań powyżej sześciu osób rekomendujemy dokonać
              rezerwacji z przynajmniej tygodniowym wyprzedzeniem.
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReservationForm;
