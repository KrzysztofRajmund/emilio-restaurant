import React, { useEffect, useState } from 'react';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
//assets
import Xicon from '../../assets/x-icon.png';
import prevIconWhite from '../../assets/prev-icon-white.png';
import nextIconWhite from '../../assets/next-icon-white.png';
//axios
import axios from 'axios';

const Album = () => {
  const [data, setData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState();

  const getImagesBucket = async () => {
    try {
      await axios
        .get('https://emilio-restaurant-server.herokuapp.com/getObjects')
        .then((response) => {
          const images = response.data;
          setData(images);
        });
    } catch (err) {
      console.log(err, 'error');
    }
  };

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 800,
    });
    getImagesBucket();
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
    <div className='gallery' id='gallery'>
      <article className='titles-container'>
        <div
          className='titles-container__animation'
          id='box'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h1 className='titles-container__title'> Album rodzinny</h1>
        </div>
      </article>
      <div className='gallery__row' data-aos='fade-up' data-aos-duration='3000'>
        {data &&
          data.map((image) => (
            <div
              key={image.Key}
              className='gallery__col'
              onClick={() => displayImage(image)}
            >
              <img
                alt={image.Key}
                src={`https://emilio-gallery.s3.eu-central-1.amazonaws.com/${image.Key}`}
              />
            </div>
          ))}
        {showModal ? (
          <div className='modalContainer'>
            <section class='modalCard'>
              <img
                className='modalImage'
                src={`https://emilio-gallery.s3.eu-central-1.amazonaws.com/${image.Key}`}
                alt={image.Key}
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
  );
};

export default Album;
