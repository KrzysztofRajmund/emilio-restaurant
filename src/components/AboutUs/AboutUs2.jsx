import React,{useEffect, useState} from "react";
//components
import Gallery from "./Gallery";
//assets
import Logo from "../../assets/logo.png";
import RestaurantImage from "../../assets/restaurantImage.jpg";

const AboutUs2 = () => {
  const h1 = document.getElementById("h1");
  const [loading, setLoading] = useState(false)

useEffect(()=>{

    setLoading(true)
      
},[])


if (loading){

  function isInViewport(h1){
    const bounding = h1.getBoundingClientRect();
    return(
          bounding.top >= 70 && bounding.top <= 120 &&
        bounding.left >= 0
    )
    }
  window.addEventListener("scroll", function(e){
    if (isInViewport(h1)){
      console.log(" i am in viewport")
    }
   }) 
}



  return (
    <React.Fragment>
      <div className="about">
        <h1 id="h1">HELLO</h1>
      </div>
    </React.Fragment>
  );
};

export default AboutUs2;
