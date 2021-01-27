import React,{useEffect, useState} from "react";

const ScrollButton = () => {

  const [loading, setLoading] = useState(false);
  const scroll = document.querySelector(".scroll-container");

  useEffect(()=>{
    setLoading(true);
  },[])

  if (loading) {
    document.onscroll = function() {
      if (window.innerHeight + window.scrollY + 200 > document.body.clientHeight) {
          scroll.classList.add("hidden");
      } else {
        scroll.classList.remove("hidden");
      }
  }
  }


  return (
<div className="scroll-container">
    <div className="scroll-container__button">
    <span></span>
    </div>

    <div className="scroll-container__arrow">
      <span></span>
      <span></span>
    </div>
</div>
  );
};

export default ScrollButton;
