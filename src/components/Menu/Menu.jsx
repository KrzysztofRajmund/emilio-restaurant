import React from 'react';
import HeaderJumbotron from '../Home/HeaderJumbotron';

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
          <h1 className='titles-container__title'> Menu</h1>
          <h5 className='titles-container__subtitle'>Odkryj nasze smaki</h5>
        </div>
      </article>
    </React.Fragment>
  );
};

export default Menu;
