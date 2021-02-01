import React from "react";
//components
import MapContact from "./MapContact";
import HeaderJumbotron from "../Home/HeaderJumbotron";

const Contact = () => {
  return (
    <React.Fragment>
    {window.location.pathname === "/kontakt" ?  <HeaderJumbotron/> : "" }
    <div className="contact">
      <div className="contact__card-content">
        <div className="contact__content">
          <h1>Kontakt</h1>
          <h5>(512) 555-0110</h5>
          <h5>template.placeholder@gmail.com</h5>
          <h5>123 Willow Street Austin, TX 78702</h5>
        </div>
      </div>
      <div className="contact__card-map">
        <div className="contact__content">
          <MapContact />
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Contact;
