import React, { useState } from "react";
import "./ListCard.css";

const ListCard = ({ data }) => {
  const { images, location, distance, dates, price, rating } = data;
  const [cardImage, setCardImage] = useState(0);

  const handlePrev = () => {
    setCardImage((prev) => (prev === 0 ? images.lenght - 1 : prev - 1));
  };

  const handleNext = () => {
    setCardImage((prev) => (prev === images.lenght - 1 ? 0 : prev + 1));
  };

  return (
    <div className="card">
      <div>
        <img
          src={images[cardImage]}
          alt={`${location}이미지`}
          className="card-image"
        />
        <button className="nav-button left" onClick={handlePrev}>
          ◀
        </button>
        <button className="nav-button right" onClick={handleNext}>
          ▶
        </button>
      </div>
      <div className="card-content">
        <p className="location">{location}</p>
        <p className="distance">{distance} 거리</p>
        <p className="dates">{dates}</p>
        <p className="price">{price} /박</p>
        <p className="rating">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default ListCard;
