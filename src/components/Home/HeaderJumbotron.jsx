import React, { useEffect, useState, useContext } from 'react';
//components
import Navigation from './Navigation';
import ThemeContext from '../utils/ThemeContext';
//assets
import JumbotronImageDiscover from '../../assets/jumbotron1.jpg';
import Underline from '../../assets/underline.png';
//anime
import anime from 'animejs';

const HeaderJumbotron = () => {
  const value = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  const filterValue = value.items.filter(
    (x) => x.title === window.location.pathname.substring(1)
  );

  if (loading) {
    var textWrapper = document.querySelector(
      '.header-jumbotron-slider__animation-first'
    );
    const regex = /\S/g;
    textWrapper.innerHTML = textWrapper.textContent.replace(
      regex,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: '.header-jumbotron-slider__animation-first .letter',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1800,
      delay: (el, i) => 500 + 30 * i,
    });

    var textWrapper = document.querySelector(
      '.header-jumbotron-slider__animation-second'
    );
    const regex13 = /\S/g;
    textWrapper.innerHTML = textWrapper.textContent.replace(
      regex13,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: false })
      .add({
        targets: '.header-jumbotron-slider__animation-second .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1800,
        delay: (el, i) => 1600 + 30 * i,
      })
      .add({
        targets: '.header-jumbotron-slider__animation-second .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1600,
        delay: (el, i) => 1200 + 30 * i,
      });
  }
  return (
    <div className='header-jumbotron-container'>
      <Navigation />
      <div className='header-jumbotron-slider'>
        <div className='header-jumbotron-slider__text-container'>
          <h1 className='header-jumbotron-slider__animation-first'>
            {filterValue[0].title === 'onas' ? 'o nas' : filterValue[0].title}
          </h1>
          <h2 className='header-jumbotron-slider__animation-second'>
            {filterValue[0].subtitle}
          </h2>
          <img src={Underline} alt='underline' />
        </div>
        <section
          className='header-jumbotron-slider__image'
          id={`jumbotron-${window.location.pathname.substring(1)}`}
        ></section>
      </div>
    </div>
  );
};

export default HeaderJumbotron;
