import React from 'react';
//components
import HeaderJumbotron from '../Home/HeaderJumbotron';
//json data
import menuData from '../../menuData';

const Menu = () => {
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
                <h4 className='titles-container__food-description'>
                  {product.description}
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
                <h4 className='titles-container__food-description'>
                  {product.description}
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
                <h4 className='titles-container__food-description'>
                  {product.description}
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
                <h4 className='titles-container__food-description'>
                  {product.description}
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
                <h4 className='titles-container__food-description'>
                  {product.description}
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
                <h4 className='titles-container__food-description'>
                  {product.description}
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
        </div>
        {menuData.items.map((product) => {
          if (product.category === 'per bambini') {
            return (
              <div
                key={product.id}
                className='titles-container__food-container'
              >
                <h3 className='titles-container__food-name'>{product.title}</h3>
                <h4 className='titles-container__food-description'>
                  {product.description}
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
                <h4 className='titles-container__food-description'>
                  {product.description}
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
                <h4 className='titles-container__food-description'>
                  {product.description}
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
