import React, { useEffect, useState } from 'react';

const ScrollButton = () => {
  const [loading, setLoading] = useState(false);
  const scroll = document.querySelector('.scroll-container');

  useEffect(() => {
    setLoading(true);
  }, []);

  // if (loading) {
  //   document.onscroll = function () {
  //     if (
  //       window.innerHeight + window.scrollY + 250 >
  //       document.body.clientHeight
  //     ) {
  //       scroll.classList.add('hidden');
  //     } else {
  //       scroll.classList.remove('hidden');
  //     }
  //   };
  // }

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
