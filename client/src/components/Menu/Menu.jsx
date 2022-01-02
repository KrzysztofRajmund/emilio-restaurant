import React, { useEffect, useState } from 'react';
//components
import HeaderJumbotron from '../Home/HeaderJumbotron';
import SeoHelmet from './../utils/SeoHelmet';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
//react-scroll
import { Link } from 'react-scroll';
//axios
import axios from 'axios';

const Menu = () => {
  const [menu, setMenu] = useState();

  const getMenuItems = async () => {
    await axios(
      'https://emilio-restaurant-server.herokuapp.com/api/menu/get'
    ).then((response) => {
      if (response.status !== 200) {
        console.log('error', response);
      } else {
        console.log('response MENU', response.data.data);
        setMenu(response.data.data);
      }
    });
  };

  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 800,
    });
    getMenuItems();
  }, []);
  const displayFastMenu = () => {
    const targetMenuNav = document.getElementsByClassName(
      'titles-container__menu-nav'
    )[0];
    const targetMenuFast = document.getElementsByClassName(
      'titles-container__menu-fast'
    )[0];
    targetMenuNav.classList.toggle('active');
    targetMenuFast.textContent === 'Otwórz szybkie menu'
      ? (targetMenuFast.textContent = 'Zamknij szybkie menu')
      : (targetMenuFast.textContent = 'Otwórz szybkie menu');
  };

  return (
    <React.Fragment>
      <SeoHelmet
        title='Kuchnia Włoska'
        description='Emilio Restauracja, włoskie smaki, kuchnia włoska, ristorante emilio.
        Makarony, pasta, ravioli, antipasti, wino.'
        imageUrl='http://www.emiliorestauracja.com/1%20(16).jpg'
        imageAlt='Restauracja Emilio'
      />
      {window.location.pathname === '/menu' ? <HeaderJumbotron /> : ''}
      <article className='titles-container titles-container__nav-sticky'>
        <div className='titles-container__animation' id='box'>
          <section
            className='titles-container__menu-fast'
            onClick={displayFastMenu}
          >
            Otwórz szybkie menu
          </section>
          <div className='titles-container__menu-nav'>
            <div className='titles-container__menu-nav-card'>
              <h4 className='titles-container__subtitle'>
                <Link
                  to='antipasti'
                  duration={650}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  onClick={displayFastMenu}
                >
                  antipasti
                </Link>
              </h4>
              <h4 className='titles-container__subtitle'>
                <Link
                  to='insalate'
                  duration={650}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  onClick={displayFastMenu}
                >
                  insalate
                </Link>
              </h4>
              <h4 className='titles-container__subtitle'>
                <Link
                  to='zuppa'
                  duration={650}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  onClick={displayFastMenu}
                >
                  zuppa
                </Link>
              </h4>
              <h4 className='titles-container__subtitle'>
                <Link
                  to='pasta'
                  duration={650}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  onClick={displayFastMenu}
                >
                  pasta
                </Link>
              </h4>
              <h4 className='titles-container__subtitle'>
                <Link
                  to='pesce'
                  duration={650}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  onClick={displayFastMenu}
                >
                  pesce
                </Link>
              </h4>
            </div>
            <div className='titles-container__menu-nav-card'>
              <h4 className='titles-container__subtitle'>
                <Link
                  to='carne'
                  duration={650}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  onClick={displayFastMenu}
                >
                  carne
                </Link>
              </h4>
              <h4 className='titles-container__subtitle'>
                <Link
                  to='forkids'
                  duration={650}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  onClick={displayFastMenu}
                >
                  dla dzieci
                </Link>
              </h4>
              <h4 className='titles-container__subtitle'>
                <Link
                  to='dolci'
                  duration={650}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  onClick={displayFastMenu}
                >
                  dolci
                </Link>
              </h4>
              <h4 className='titles-container__subtitle'>
                <Link
                  to='sezonowe'
                  duration={650}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  onClick={displayFastMenu}
                >
                  dania sezonowe
                </Link>
              </h4>
              <h4 className='titles-container__subtitle'>
                <Link
                  to='dodatki'
                  duration={650}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  onClick={displayFastMenu}
                >
                  dodatki
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </article>
      <article
        className='titles-container titles-container__menu'
        id='antipasti'
      >
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'>antipasti</h1>
        </div>
        {menu &&
          menu.map((product) => {
            if (product.category === 'antipasti') {
              return (
                <div
                  key={product.id}
                  className='titles-container__food-container'
                >
                  <h3 className='titles-container__food-name'>
                    {product.title}
                  </h3>
                  <h4 className='titles-container__food-description titles-container__food-description--polish'>
                    {product.description.includes('/')
                      ? product.description.substring(
                          0,
                          product.description.indexOf('/')
                        )
                      : product.description}
                  </h4>
                  <h4 className='titles-container__food-description'>
                    {product.description.substring(
                      product.description.indexOf('/') + 1,
                      product.description.length + 1
                    )}
                  </h4>
                  <h4 className='titles-container__food-price'>
                    {product.price} pln
                  </h4>
                </div>
              );
            }
          })}
      </article>
      <article
        className='titles-container titles-container__menu'
        id='insalate'
      >
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'>insalate</h1>
        </div>
        {menu &&
          menu.map((product) => {
            if (product.category === 'insalate') {
              return (
                <div
                  key={product.id}
                  className='titles-container__food-container'
                >
                  <h3 className='titles-container__food-name'>
                    {product.title}
                  </h3>
                  <h4 className='titles-container__food-description titles-container__food-description--polish'>
                    {product.description.includes('/')
                      ? product.description.substring(
                          0,
                          product.description.indexOf('/')
                        )
                      : product.description}
                  </h4>
                  <h4 className='titles-container__food-description'>
                    {product.description.substring(
                      product.description.indexOf('/') + 1,
                      product.description.length + 1
                    )}
                  </h4>
                  <h4 className='titles-container__food-price'>
                    {product.price} pln
                  </h4>
                </div>
              );
            }
          })}
      </article>
      <article className='titles-container titles-container__menu' id='zuppa'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'>zuppa</h1>
        </div>
        {menu &&
          menu.map((product) => {
            if (product.category === 'zuppa') {
              return (
                <div
                  key={product.id}
                  className='titles-container__food-container'
                >
                  <h3 className='titles-container__food-name'>
                    {product.title}
                  </h3>
                  <h4 className='titles-container__food-description titles-container__food-description--polish'>
                    {product.description.includes('/')
                      ? product.description.substring(
                          0,
                          product.description.indexOf('/')
                        )
                      : product.description}
                  </h4>
                  <h4 className='titles-container__food-description'>
                    {product.description.substring(
                      product.description.indexOf('/') + 1,
                      product.description.length + 1
                    )}
                  </h4>
                  <h4 className='titles-container__food-price'>
                    {product.price} pln
                  </h4>
                </div>
              );
            }
          })}
      </article>
      <article className='titles-container titles-container__menu' id='pasta'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'>pasta</h1>
        </div>
        {menu &&
          menu.map((product) => {
            if (product.category === 'pasta') {
              return (
                <div
                  key={product.id}
                  className='titles-container__food-container'
                >
                  <h3 className='titles-container__food-name'>
                    {product.title}
                  </h3>
                  <h4 className='titles-container__food-description titles-container__food-description--polish'>
                    {product.description.includes('/')
                      ? product.description.substring(
                          0,
                          product.description.indexOf('/')
                        )
                      : product.description}
                  </h4>
                  <h4 className='titles-container__food-description'>
                    {product.description.substring(
                      product.description.indexOf('/') + 1,
                      product.description.length + 1
                    )}
                  </h4>
                  <h4 className='titles-container__food-price'>
                    {product.price} pln
                  </h4>
                </div>
              );
            }
          })}
      </article>
      <article className='titles-container titles-container__menu' id='pesce'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'>pesce</h1>
        </div>
        {menu &&
          menu.map((product) => {
            if (product.category === 'pesce') {
              return (
                <div
                  key={product.id}
                  className='titles-container__food-container'
                >
                  <h3 className='titles-container__food-name'>
                    {product.title}
                  </h3>
                  <h4 className='titles-container__food-description titles-container__food-description--polish'>
                    {product.description.includes('/')
                      ? product.description.substring(
                          0,
                          product.description.indexOf('/')
                        )
                      : product.description}
                  </h4>
                  <h4 className='titles-container__food-description'>
                    {product.description.substring(
                      product.description.indexOf('/') + 1,
                      product.description.length + 1
                    )}
                  </h4>
                  <h4 className='titles-container__food-price'>
                    {product.price} pln
                  </h4>
                </div>
              );
            }
          })}
      </article>
      <article className='titles-container titles-container__menu' id='carne'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'>carne</h1>
        </div>
        {menu &&
          menu.map((product) => {
            if (product.category === 'carne') {
              return (
                <div
                  key={product.id}
                  className='titles-container__food-container'
                >
                  <h3 className='titles-container__food-name'>
                    {product.title}
                  </h3>
                  <h4 className='titles-container__food-description titles-container__food-description--polish'>
                    {product.description.includes('/')
                      ? product.description.substring(
                          0,
                          product.description.indexOf('/')
                        )
                      : product.description}
                  </h4>
                  <h4 className='titles-container__food-description'>
                    {product.description.substring(
                      product.description.indexOf('/') + 1,
                      product.description.length + 1
                    )}
                  </h4>
                  <h4 className='titles-container__food-price'>
                    {product.price} pln
                  </h4>
                </div>
              );
            }
          })}
      </article>
      <article className='titles-container titles-container__menu' id='forkids'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title' id='forkids'>
            per bambini
          </h1>
          <h4 className='titles-container__subtitle'>
            dla dzieci / for kids / für Kinder
          </h4>
        </div>
        {menu &&
          menu.map((product) => {
            if (product.category === 'per bambini') {
              return (
                <div
                  key={product.id}
                  className='titles-container__food-container'
                >
                  <h3 className='titles-container__food-name'>
                    {product.title}
                  </h3>
                  <h4 className='titles-container__food-description titles-container__food-description--polish'>
                    {product.description.includes('/')
                      ? product.description.substring(
                          0,
                          product.description.indexOf('/')
                        )
                      : product.description}
                  </h4>
                  <h4 className='titles-container__food-description'>
                    {product.description.substring(
                      product.description.indexOf('/') + 1,
                      product.description.length + 1
                    )}
                  </h4>
                  <h4 className='titles-container__food-price'>
                    {product.price} pln
                  </h4>
                </div>
              );
            }
          })}
      </article>
      <article className='titles-container titles-container__menu' id='dolci'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title' id='dolci'>
            dolci
          </h1>
        </div>
        {menu &&
          menu.map((product) => {
            if (product.category === 'dolci') {
              return (
                <div
                  key={product.id}
                  className='titles-container__food-container'
                >
                  <h3 className='titles-container__food-name'>
                    {product.title}
                  </h3>
                  <h4 className='titles-container__food-description titles-container__food-description--polish'>
                    {product.description.includes('/')
                      ? product.description.substring(
                          0,
                          product.description.indexOf('/')
                        )
                      : product.description}
                  </h4>
                  <h4 className='titles-container__food-description'>
                    {product.description.substring(
                      product.description.indexOf('/') + 1,
                      product.description.length + 1
                    )}
                  </h4>
                  <h4 className='titles-container__food-price'>
                    {product.price} pln
                  </h4>
                </div>
              );
            }
          })}
      </article>
      <article
        className='titles-container titles-container__menu'
        id='sezonowe'
      >
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'>dania sezonowe</h1>
          </div>
          {menu &&
          menu.map((product) => {
            if (product.category.toLowerCase() === 'sezonowe') {
              return (
                <div
                  key={product.id}
                  className='titles-container__food-container'
                >
                  {/* TODO: Perhaps will be added later in sesonal menu */}
                  {/* <h3 className='titles-container__food-name'>
                    {product.title}
                  </h3> */}
                  <h4 className='titles-container__food-description titles-container__food-description--polish'>
                    {product.description.includes('/')
                      ? product.description.substring(
                          0,
                          product.description.indexOf('/')
                        )
                      : product.description}
                  </h4>
                  <h4 className='titles-container__food-description'>
                    {product.description.substring(
                      product.description.indexOf('/') + 1,
                      product.description.length + 1
                    )}
                  </h4>
                  <h4 className='titles-container__food-price'>
                    {product.price} pln
                  </h4>
                </div>
              );
            }
          })}
      </article>
      <article className='titles-container titles-container__menu' id='dodatki'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'>dodatki</h1>
        </div>
        {menu &&
          menu.map((product) => {
            if (product.category === 'dodatki') {
              return (
                <div
                  key={product.id}
                  className='titles-container__food-container'
                >
                  <h3 className='titles-container__food-name'>
                    {product.title}
                  </h3>
                  <h4 className='titles-container__food-description titles-container__food-description--polish'>
                    {product.description.includes('/')
                      ? product.description.substring(
                          0,
                          product.description.indexOf('/')
                        )
                      : product.description}
                  </h4>
                  <h4 className='titles-container__food-description'>
                    {product.description.substring(
                      product.description.indexOf('/') + 1,
                      product.description.length + 1
                    )}
                  </h4>
                  <h4 className='titles-container__food-price'>
                    {product.price} pln
                  </h4>
                </div>
              );
            }
          })}
      </article>
    </React.Fragment>
  );
};

export default Menu;
