import React from "react";
import MapContact from "./MapContact";

const Contact = () => {
  return (
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
  );
};

export default Contact;
