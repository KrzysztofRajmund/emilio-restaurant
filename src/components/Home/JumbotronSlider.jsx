import React, { useEffect } from 'react';
//assets
import JumbotronImageDiscover from '../../assets/1 (1).jpg';
//anime
import anime from 'animejs';
//components
import Navigation from './Navigation';

const JumbotronSlider = () => {
  useEffect(() => {
    const discover = document.getElementById('discover');
    const image = document.getElementById('image-jumbotron');

    discover.addEventListener('mouseover', () => {
      image.style.backgroundImage = `url(${JumbotronImageDiscover})`;
    });
    discover.addEventListener('mouseleave', () => {
      image.style.backgroundImage = null;
    });

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
  }, []);

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
          <strong id='discover'>Discover</strong>
          <strong id='menu'>Menu</strong>
          <strong id='visit'>​Odwiedź nas</strong>
          <div className='contact-info'>
            <h5>tel. 508 224 177</h5>
            <small>Jana Pawla II 43, Szczecin 70-415 PL</small>
          </div>
        </div>
        <img id='image-jumbotron' />
      </div>
    </div>
  );
};

export default JumbotronSlider;
