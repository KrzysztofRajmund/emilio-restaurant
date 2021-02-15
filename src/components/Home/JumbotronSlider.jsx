import React, { useState, useEffect } from 'react';
//assets
import JumbotronImageDiscover1 from '../../assets/jumbotron1.jpg';
import JumbotronImageDiscover2 from '../../assets/jumbotron2.jpg';
import JumbotronImageDiscover3 from '../../assets/jumbotron3.jpg';
import JumbotronImageDiscover4 from '../../assets/jumbotron4.jpg';
import Underline from '../../assets/underline.png';
//anime
import anime from 'animejs';
//components
import Navigation from './Navigation';

const JumbotronSlider = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  if (loading) {
    //button discover
    const discover = document.getElementById('discover');
    const image = document.getElementById('image-jumbotron');

    discover.addEventListener('mouseover', () => {
      image.style.backgroundImage = `url(${JumbotronImageDiscover2})`;
    });
    discover.addEventListener('mouseleave', () => {
      image.style.backgroundImage = `url(${JumbotronImageDiscover1})`;
    });
    //button menu
    const menu = document.getElementById('menu');

    menu.addEventListener('mouseover', () => {
      image.style.backgroundImage = `url(${JumbotronImageDiscover3})`;
    });
    menu.addEventListener('mouseleave', () => {
      image.style.backgroundImage = `url(${JumbotronImageDiscover1})`;
    });
    //button visit
    const visit = document.getElementById('visit');

    visit.addEventListener('mouseover', () => {
      image.style.backgroundImage = `url(${JumbotronImageDiscover4})`;
    });
    visit.addEventListener('mouseleave', () => {
      image.style.backgroundImage = `url(${JumbotronImageDiscover1})`;
    });

    //animation
    var textWrapper = document.querySelector(
      '.jumbotron-slider__animation-first'
    );
    const regex = /\S/g;
    textWrapper.innerHTML = textWrapper.textContent.replace(
      regex,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: false })
      .add({
        targets: '.jumbotron-slider__animation-first .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1800,
        delay: (el, i) => 500 + 30 * i,
      })
      .add({
        targets: '.jumbotron-slider__animation-first .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1600,
        delay: (el, i) => 100 + 30 * i,
      });

    var textWrapper = document.querySelector(
      '.jumbotron-slider__animation-second'
    );
    const regex13 = /\S/g;
    textWrapper.innerHTML = textWrapper.textContent.replace(
      regex13,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: false })
      .add({
        targets: '.jumbotron-slider__animation-second .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1800,
        delay: (el, i) => 1600 + 30 * i,
      })
      .add({
        targets: '.jumbotron-slider__animation-second .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1600,
        delay: (el, i) => 1200 + 30 * i,
      });
  }

  return (
    <div className='jumbotron-container'>
      <Navigation />
      <div className='jumbotron-slider'>
        <div className='jumbotron-slider__text-container'>
          <h1 className='jumbotron-slider__animation-first'>
            Emilio Restaurant
          </h1>
          <h2 className='jumbotron-slider__animation-second'>
            Rodzinna kuchnia włoska
          </h2>
          <div>
            <strong id='discover'>Discover</strong>
            <strong id='menu'>Menu</strong>
            <strong id='visit'>​Odwiedź nas</strong>
          </div>
          <div className='contact-info'>
            <img src={Underline} alt='underline' />
            <p>Szczecin, ul. Jana Pawła II 43</p>
            <p>tel. 508 224 177</p>
          </div>
        </div>
        <img id='image-jumbotron' />
      </div>
    </div>
  );
};

export default JumbotronSlider;
