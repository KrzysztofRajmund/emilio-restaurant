import React from "react";
import tileData from "../../tileData";

export default function Gallery() {
  return (
    <div className="gallery">
       <div className="gallery__card-title">
      <h1> Galeria</h1>
      <h5>Nasza historia</h5>
        </div>
      <div className="gallery__row">
        {tileData.items.map((image) => (
          <div key={image.id} className="gallery__col">
            <img src={image.url} alt={image.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
