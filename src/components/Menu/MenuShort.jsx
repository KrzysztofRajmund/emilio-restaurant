import React, { useState, useEffect } from 'react';
//assets
import MenuShortImage1 from '../../assets/1 (35).jpg';
import MenuShortImage2 from '../../assets/1 (43).jpg';
import MenuShortImage3 from '../../assets/1 (47).jpg';
//react-bootstrap
import { Carousel } from 'react-bootstrap';
//anime
import anime from 'animejs';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const MenuShort = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    // setLoading(true);
    AOS.init({
      offset: 300,
      duration: 800,
    });
  }, []);

  document.addEventListener('aos:in', () => {
    animate();
  });

  function animate() {
    var textWrapper = document.querySelector('.ml9 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: '.ml9 .letter',
      scale: [0, 1],
      duration: 2000,
      elasticity: 600,
      delay: (el, i) => 85 * (i + 1),
    });
  }
  return (
    <section className='menuShort'>
      <div className='shortMenu__title'>
        <article className='about-container'>
          <div className='about__card-header' id='box' data-aos='fade-left'>
            <h1 class='ml9'>
              <span class='text-wrapper'>
                <span class='letters' id='letters'>
                  Menu
                </span>
              </span>
            </h1>
            <h5>Z najlepszych produktów</h5>
          </div>
        </article>
      </div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        data-aos='fade-right'
      >
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={MenuShortImage1}
            alt='First slide'
          />
          <Carousel.Caption>
            <h4>Główne menu {`>>`}</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={MenuShortImage2}
            alt='Second slide'
          />
          <Carousel.Caption>
            <h4>Desery {`>>`}</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={MenuShortImage3}
            alt='Third slide'
          />
          <Carousel.Caption>
            <h4>Wina {`>>`}</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default MenuShort;
