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
            <p>
              {' '}
              <a href='tel:+48-508-224-177'>+48 508 224 177</a>
            </p>
            <p>Jana Pawła II 43</p>
            <p>Szczecin 70-415</p>
            <p>
              <a href='mailto:info@restauracjaemilio.pl?&subject=Emilio Rezerwacja&body=Jak możemy pomóc?'>
                info@restauracjaemilio.pl
              </a>
            </p>
          </address>
        </div>
        <div className='footer-container__card'>
          <div className='footer-container__logo'>
            <img src={Logo} width='100px' height='auto' alt='logo' />
          </div>
          <a
            className=' footer-container__card--social-media'
            href='https://www.facebook.com/EmilioRestaurantSzczecin'
            target='_blank'
          >
            <img src={Facebook} alt='facebook' width='30px' height='30px' />{' '}
          </a>
          <a
            className=' footer-container__card--social-media'
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
            <p>Wt–Czw 12–19</p>
            <p>Piat 12–20</p>
            <p>Sob 13–20</p>
            <p>Niedz 13–18</p>
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
