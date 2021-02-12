import React, { useEffect, useState } from 'react';
//data json
import tileData from '../../tileData';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
//assets
import Xicon from '../../assets/x-icon.png';

export default function Gallery() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const modalElement = document.getElementById('modal');

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 800,
    });
    setLoading(true);
  }, []);

  const openModal = () => {
    modalElement.style.display = 'block';
  };

  const closeModal = () => {
    modalElement.style.display = 'none';
  };

  return (
    <div className='gallery'>
      <div
        className='gallery__card-title'
        id='box'
        data-aos='flip-left'
        data-aos-easing='ease-out-cubic'
        data-aos-duration='2000'
      >
        <h1> Galeria</h1>
        <h5>Nasza historia</h5>
      </div>
      <div className='gallery__row' data-aos='fade-up' data-aos-duration='3000'>
        {tileData.items.map((image) => (
          <div
            key={image.id}
            className='gallery__col'
            onClick={() => openModal()}
          >
            <img src={image.url} />
            <section id='modal' class='modal' onClick={() => closeModal()}>
              <img className='modalImage' src={image.url} />
              <img
                className='modalExit'
                src={Xicon}
                onClick={() => closeModal()}
              />
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
