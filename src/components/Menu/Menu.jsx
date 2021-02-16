import React, { useEffect } from 'react';
//components
import HeaderJumbotron from '../Home/HeaderJumbotron';
//json data
import menuData from '../../menuData';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Menu = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 800,
    });
  }, []);
  return (
    <React.Fragment>
      {window.location.pathname === '/menu' ? <HeaderJumbotron /> : ''}
      <article className='titles-container'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'>antipasti</h1>
        </div>
        {menuData.items.map((product) => {
          if (product.category === 'antipasti') {
            return (
              <div
                key={product.id}
                className='titles-container__food-container'
              >
                <h3 className='titles-container__food-name'>{product.title}</h3>
                <h4 className='titles-container__food-description titles-container__food-description--polish'>
                  {product.description.substring(
                    0,
                    product.description.indexOf('/')
                  )}
                </h4>
                <h4 className='titles-container__food-description'>
                  {product.description.substring(
                    product.description.indexOf('/') + 1,
                    product.description.length + 1
                  )}
                </h4>
                <h4 className='titles-container__food-price'>
                  {product.price}
                </h4>
              </div>
            );
          }
        })}
      </article>
      <article className='titles-container'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'>insalate</h1>
        </div>
        {menuData.items.map((product) => {
          if (product.category === 'insalate') {
            return (
              <div
                key={product.id}
                className='titles-container__food-container'
              >
                <h3 className='titles-container__food-name'>{product.title}</h3>
                <h4 className='titles-container__food-description titles-container__food-description--polish'>
                  {product.description.substring(
                    0,
                    product.description.indexOf('/')
                  )}
                </h4>
                <h4 className='titles-container__food-description'>
                  {product.description.substring(
                    product.description.indexOf('/') + 1,
                    product.description.length + 1
                  )}
                </h4>
                <h4 className='titles-container__food-price'>
                  {product.price}
                </h4>
              </div>
            );
          }
        })}
      </article>
      <article className='titles-container'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'>zuppa</h1>
        </div>
        {menuData.items.map((product) => {
          if (product.category === 'zuppa') {
            return (
              <div
                key={product.id}
                className='titles-container__food-container'
              >
                <h3 className='titles-container__food-name'>{product.title}</h3>
                <h4 className='titles-container__food-description titles-container__food-description--polish'>
                  {product.description.substring(
                    0,
                    product.description.indexOf('/')
                  )}
                </h4>
                <h4 className='titles-container__food-description'>
                  {product.description.substring(
                    product.description.indexOf('/') + 1,
                    product.description.length + 1
                  )}
                </h4>
                <h4 className='titles-container__food-price'>
                  {product.price}
                </h4>
              </div>
            );
          }
        })}
      </article>
      <article className='titles-container'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'>pasta</h1>
        </div>
        {menuData.items.map((product) => {
          if (product.category === 'pasta') {
            return (
              <div
                key={product.id}
                className='titles-container__food-container'
              >
                <h3 className='titles-container__food-name'>{product.title}</h3>
                <h4 className='titles-container__food-description titles-container__food-description--polish'>
                  {product.description.substring(
                    0,
                    product.description.indexOf('/')
                  )}
                </h4>
                <h4 className='titles-container__food-description'>
                  {product.description.substring(
                    product.description.indexOf('/') + 1,
                    product.description.length + 1
                  )}
                </h4>
                <h4 className='titles-container__food-price'>
                  {product.price}
                </h4>
              </div>
            );
          }
        })}
      </article>
      <article className='titles-container'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'>pesce</h1>
        </div>
        {menuData.items.map((product) => {
          if (product.category === 'pesce') {
            return (
              <div
                key={product.id}
                className='titles-container__food-container'
              >
                <h3 className='titles-container__food-name'>{product.title}</h3>
                <h4 className='titles-container__food-description titles-container__food-description--polish'>
                  {product.description.substring(
                    0,
                    product.description.indexOf('/')
                  )}
                </h4>
                <h4 className='titles-container__food-description'>
                  {product.description.substring(
                    product.description.indexOf('/') + 1,
                    product.description.length + 1
                  )}
                </h4>
                <h4 className='titles-container__food-price'>
                  {product.price}
                </h4>
              </div>
            );
          }
        })}
      </article>
      <article className='titles-container'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'>carne</h1>
        </div>
        {menuData.items.map((product) => {
          if (product.category === 'carne') {
            return (
              <div
                key={product.id}
                className='titles-container__food-container'
              >
                <h3 className='titles-container__food-name'>{product.title}</h3>
                <h4 className='titles-container__food-description titles-container__food-description--polish'>
                  {product.description.substring(
                    0,
                    product.description.indexOf('/')
                  )}
                </h4>
                <h4 className='titles-container__food-description'>
                  {product.description.substring(
                    product.description.indexOf('/') + 1,
                    product.description.length + 1
                  )}
                </h4>
                <h4 className='titles-container__food-price'>
                  {product.price}
                </h4>
              </div>
            );
          }
        })}
      </article>
      <article className='titles-container'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'>per bambini</h1>
          <h4 className='titles-container__subtitle'>
            dla dzieci / for kids / für Kinder
          </h4>
        </div>
        {menuData.items.map((product) => {
          if (product.category === 'per bambini') {
            return (
              <div
                key={product.id}
                className='titles-container__food-container'
              >
                <h3 className='titles-container__food-name'>{product.title}</h3>
                <h4 className='titles-container__food-description titles-container__food-description--polish'>
                  {product.description.substring(
                    0,
                    product.description.indexOf('/')
                  )}
                </h4>
                <h4 className='titles-container__food-description'>
                  {product.description.substring(
                    product.description.indexOf('/') + 1,
                    product.description.length + 1
                  )}
                </h4>
                <h4 className='titles-container__food-price'>
                  {product.price}
                </h4>
              </div>
            );
          }
        })}
      </article>
      <article className='titles-container'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'>dolci</h1>
        </div>
        {menuData.items.map((product) => {
          if (product.category === 'dolci') {
            return (
              <div
                key={product.id}
                className='titles-container__food-container'
              >
                <h3 className='titles-container__food-name'>{product.title}</h3>
                <h4 className='titles-container__food-description titles-container__food-description--polish'>
                  {product.description.substring(
                    0,
                    product.description.indexOf('/')
                  )}
                </h4>
                <h4 className='titles-container__food-description'>
                  {product.description.substring(
                    product.description.indexOf('/') + 1,
                    product.description.length + 1
                  )}
                </h4>
                <h4 className='titles-container__food-price'>
                  {product.price}
                </h4>
              </div>
            );
          }
        })}
      </article>
      <article className='titles-container'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'>dania sezonowe</h1>
          <h4 className='titles-container__subtitle'>
            <p>Dalszy wybór dań sezonowych znajdą Państwo na naszej tablicy.</p>
            <p>
              A further selection of seasonal dishes can be found on our board.
            </p>
            <p>
              Eine weitere Auswahl an saisonalen Gerichten finden Sie auf
              unserer Tafel.
            </p>
          </h4>
        </div>
      </article>
      <article className='titles-container'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'>dodatki</h1>
        </div>
        {menuData.items.map((product) => {
          if (product.category === 'dodatki') {
            return (
              <div
                key={product.id}
                className='titles-container__food-container'
              >
                <h3 className='titles-container__food-name'>{product.title}</h3>
                <h4 className='titles-container__food-description titles-container__food-description--polish'>
                  {product.description.substring(
                    0,
                    product.description.indexOf('/')
                  )}
                </h4>
                <h4 className='titles-container__food-description'>
                  {product.description.substring(
                    product.description.indexOf('/') + 1,
                    product.description.length + 1
                  )}
                </h4>
                <h4 className='titles-container__food-price'>
                  {product.price}
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
