// src/components/AccommodationDetail.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import accommodations from "../data/data";
import "./AccommodationDetail.css";
import { useEffect, useState } from "react";

const AccommodationDetail = () => {
  const { id } = useParams();
  console.log("URL 파라미터 ID:", id);
  const navigate = useNavigate();
  // const accommodation = accommodations.find((acc) => acc.id === parseInt(id));
  // console.log("찾은 숙소 데이터:", accommodation); // 디버깅용 로그

  // if (!accommodation) {
  //   return <div>숙소 정보를 찾을 수 없습니다.</div>;
  // }

  const [accommodation, setAccommodation] = useState(null);

  useEffect(() => {
    // 데이터 조회 후 상태에 저장
    const foundAccommodation = accommodations.find(
      (acc) => acc.id === parseInt(id) // id를 숫자로 변환하여 비교
    );
    setAccommodation(foundAccommodation); // 상태에 저장
  }, [id]);

  // 데이터가 없을 경우 처리
  if (!accommodation) {
    return <p>해당 숙소 정보를 찾을 수 없습니다.</p>;
  }

  const { location, dates, price, rating, images } = accommodations;

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

export default AccommodationDetail;
