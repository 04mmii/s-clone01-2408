// src/components/Detail.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Detail.css";

const Detail = ({ accommodations }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [accommodation, setAccommodation] = useState(null);

  useEffect(() => {
    const foundAccommodation = accommodations.find(
      (acc) => acc.id === parseInt(id)
    );
    setAccommodation(foundAccommodation);
  }, [id, accommodations]);

  if (!accommodation) {
    return <p>해당 숙소 정보를 찾을 수 없습니다.</p>;
  }

  const { location, dates, price, rating, images } = accommodation;

  return (
    <div className="detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← 뒤로가기
      </button>
      <h1>{location}</h1>
      <p>⭐ {rating}</p>
      <p>{dates}</p>
      <h3>₩{price.toLocaleString()} / 박</h3>

      <div className="image-gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`${location} 이미지 ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Detail;
