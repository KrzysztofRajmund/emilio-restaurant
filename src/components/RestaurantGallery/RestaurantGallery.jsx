import React, { useEffect, useState } from 'react';
//components
import Navigation from '../Home/Navigation';
//data json
import tileData from '../../tileData';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
//assets
import Xicon from '../../assets/x-icon.png';
import prevIconWhite from '../../assets/prev-icon-white.png';
import nextIconWhite from '../../assets/next-icon-white.png';

const RestaurantGallery = () => {
  const [data, setData] = useState(tileData.items);
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState();

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 800,
    });
  }, []);

  const displayImage = (image) => {
    setShowModal(true);
    setImage(image);
  };

  const prevImage = (index) => {
    if (index >= 0) {
      setImage(data[index]);
    }
  };

  const nextImage = (index) => {
    if (index < data.length) {
      setImage(data[index]);
    }
  };

  return (
    <React.Fragment>
      <Navigation />
      <div className='restaurant-gallery'>
        <article className='titles-container'>
          <div
            className='titles-container__animation'
            id='box'
            data-aos='flip-left'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2000'
          >
            <h1 className='titles-container__title'> Galeria</h1>
          </div>
        </article>
        <div
          className='gallery__row'
          data-aos='fade-up'
          data-aos-duration='3000'
        >
          {tileData.items.map((image) => (
            <div
              key={image.id}
              className='gallery__col'
              onClick={() => displayImage(image)}
            >
              <img src={image.url} />
            </div>
          ))}
          {showModal ? (
            <div className='modalContainer'>
              <section class='modalCard'>
                <img
                  className='modalImage'
                  src={image.url}
                  alt={image.id}
                  onClick={() => nextImage(data.indexOf(image) + 1)}
                />
                <img
                  className='modalPrev'
                  src={prevIconWhite}
                  alt='prev'
                  onClick={() => prevImage(data.indexOf(image) - 1)}
                />
                <img
                  className='modalNext'
                  src={nextIconWhite}
                  alt='next'
                  onClick={() => nextImage(data.indexOf(image) + 1)}
                />
                <img
                  className='modalExit'
                  src={Xicon}
                  alt='exit'
                  onClick={() => setShowModal(false)}
                />
              </section>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default RestaurantGallery;
