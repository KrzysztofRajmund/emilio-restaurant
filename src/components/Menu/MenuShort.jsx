import React, { useState, useEffect } from 'react';
//assets
import MenuShortImage1 from '../../assets/1 (35).jpg';
import MenuShortImage2 from '../../assets/1 (43).jpg';
import MenuShortImage3 from '../../assets/1 (47).jpg';
//react-bootstrap
import { Carousel } from 'react-bootstrap';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const MenuShort = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 800,
    });
  }, []);

  return (
    <section className='menuShort'>
      <article className='titles-container'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='fade-left'
        >
          <h1 className='titles-container__title'>Menu</h1>
          <h5 className='titles-container__subtitle'>
            Z najlepszych produktów
          </h5>
        </div>
      </article>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={true}
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
