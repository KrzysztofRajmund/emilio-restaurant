import React from 'react';
//assets
import Logo from '../../assets/logo.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';

const FooterComponent = () => {
  return (
    <React.Fragment>
      <footer className='footer-container'>
        <div className='footer-container__card'>
          <address>
            <h5>
              Kontakt
              <hr />
            </h5>
            <p>Tel. 508 224 177</p>
            <p>Jana Pawła II 43</p>
            <p>Szczecin 70-415 PL</p>
            <p>
              <a href='/'>emilio@gmail.com</a>
            </p>
          </address>
        </div>
        <div className='footer-container__card'>
          <div className='footer-container__logo'>
            <img src={Logo} width='100px' height='auto' alt='logo' />
          </div>
          <a
            className='footer-container__card footer-container__card--social-media'
            href='https://www.facebook.com/EmilioRestaurantSzczecin'
            target='_blank'
          >
            <img src={Facebook} alt='facebook' width='30px' height='30px' />{' '}
          </a>
          <a
            className='footer-container__card footer-container__card--social-media'
            href='https://www.instagram.com/restauracja.emilio.szczecin/'
            target='_blank'
          >
            <img src={Instagram} alt='instagram' width='30px' height='30px' />{' '}
          </a>
          <div className='footer-bottom__title'>
            Rodzinna restauracja włoska
          </div>
        </div>
        <div className='footer-container__card'>
          <address>
            <h5>
              Godziny otwarcia
              <hr />
            </h5>
            <p>Mon–Wed 6–11</p>
            <p>Thu–Sat 4–12</p>
            <p>Sun 3–10</p>
            <p>
              <a href='/rezerwacja'>Rezerwuj stolik</a>
            </p>
          </address>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default FooterComponent;
