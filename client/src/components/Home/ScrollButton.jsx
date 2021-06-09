import React from 'react';

const ScrollButton = () => {
  return (
    <React.Fragment>
      {window.location.pathname === '/adminpanel/login' ||
      window.location.pathname === '/adminpanel/admin' ||
      window.location.pathname === '/adminpanel/register' ? (
        ''
      ) : (
        <div className='scroll-container'>
          <div className='scroll-container__arrow'>
            <span></span>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ScrollButton;
