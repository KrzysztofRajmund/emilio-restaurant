import React, { useEffect, useState } from "react";
//assets
import JumbotronImageDiscover from "../../assets/jumbotron1.jpg";
//anime
import anime from 'animejs';
//components
import Navigation from './Navigation';

const JumbotronSlider = () => {

 const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true);
  },[])

  if (loading){
    var textWrapper = document.querySelector('.header-jumbotron-slider__animation-first');
    const regex = /\S/g;
    textWrapper.innerHTML = textWrapper.textContent.replace(regex, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: false})
    .add({
      targets: '.header-jumbotron-slider__animation-first .letter',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1800,
      delay: (el, i) => 500 + 30 * i
    }).add({
      targets: '.header-jumbotron-slider__animation-first .letter',
      translateX: [0,-30],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1600,
      delay: (el, i) => 100 + 30 * i
    });

    var textWrapper = document.querySelector('.header-jumbotron-slider__animation-second');
    const regex13 = /\S/g;
    textWrapper.innerHTML = textWrapper.textContent.replace(regex13, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: false})
    .add({
      targets: '.header-jumbotron-slider__animation-second .letter',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1800,
      delay: (el, i) => 1600 + 30 * i
    }).add({
      targets: '.header-jumbotron-slider__animation-second .letter',
      translateX: [0,-30],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1600,
      delay: (el, i) => 1200 + 30 * i
    });
  }
  return (
    <div className="header-jumbotron-container">
      <Navigation/>
    <div className="header-jumbotron-slider">
      <div className="header-jumbotron-slider__text-container">   
      <h1 className="header-jumbotron-slider__animation-first">Emilio Restaurant</h1>
      <h2 className="header-jumbotron-slider__animation-second">Rodzinna kuchnia włoska</h2>
      </div>
      <img className="header-jumbotron-slider__image" src={JumbotronImageDiscover} alt="image" />
    </div>
    </div>
  );
};

export default JumbotronSlider;
