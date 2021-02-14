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

export default function Gallery() {
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
            <h5 className='titles-container__subtitle'>Nasza historia</h5>
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
            <div
              id='modalContainer'
              className='modalContainer'
              onClick={() => setShowModal(false)}
            >
              <section class='modalCard'>
                <img className='modalImage' src={image.url} />
                <img
                  className='modalExit'
                  src={Xicon}
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
}
