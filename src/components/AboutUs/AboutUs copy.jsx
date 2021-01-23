import React, { useEffect, useState} from "react";
//components
import Gallery from "./Gallery";
//assets
import Logo from "../../assets/logo.png";
import RestaurantImage from "../../assets/restaurantImage.jpg";
//anime
import anime from 'animejs';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const AboutUs = () => {

  const [loading, setLoading] = useState(false);


  window.onload = function (){
     // get the element to animate
var element = document.getElementById('box');
var elementHeight = element.clientHeight;

console.log(elementHeight, " client height")

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight + 200;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}


  // animate element when it is in view
  function animate() {
    // is element in view?
    if (inView() === true && inView() !== undefined) {
        // element is in view, add class to element
        var textWrapper = document.querySelector('.ml9 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
        anime.timeline({loop: false})
          .add({
            targets: '.ml9 .letter',
            scale: [0, 1],
            duration: 1500,
            elasticity: 600,
            delay: (el, i) => 65 * (i+1)
          })
    }
  }

  }
  
  useEffect(()=>{
    AOS.init({
      offset: 400,
      duration: 800
    });
  },[]);


  return (
    <React.Fragment>
    <div className="about" data-aos="fade-left">
      <div className="about__card-header" id="box">
      <img src={Logo} alt="logo" width="90px" height="auto"/>
      <h5>Rodzinna kuchnia włoska</h5>
      <h1 class="ml9">
  <span class="text-wrapper">
    <span class="letters">Nasza historia</span>
  </span>
</h1>
        </div>
        <div className="about__card-container">
        <div className="about__card-text">
        <h4>Fue sus puertas al público en su antiguo local de la calle Cantuarias en Miraflores.

Hoy, en tiempos de quedarnos en casa, hemos preparado una selección de los platos que fueron parte de la historia nuestro restaurante a lo largo de los últimos 26 años. Platos sabrosos que seguro despertarán la nostalgia en aquellos que nos acompañaron durante nuestra vida, dedicada a intentar hacerlos felices cada vez que nos visitaron.</h4>
      </div>
        <div className="about__card-image">
        <img src={RestaurantImage} alt="restaurant-image"/>
        </div>
        </div>
    </div>
      <Gallery/>
      </React.Fragment>
  );
};

export default AboutUs;
