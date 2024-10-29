// src/components/AccommodationDetail.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Detail.css";
import { useEffect, useState } from "react";

const Detail = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const accommodation = props.accommodations.find(
    (acc) => acc.id === parseInt(id)
  );
  // console.log("찾은 숙소 데이터:", accommodation); // 디버깅용 로그

  // if (!accommodation) {
  //   return <div>숙소 정보를 찾을 수 없습니다.</div>;
  // }

  // const [accommodation, setAccommodation2] = useState(null);

  useEffect(() => {
    // 데이터 조회 후 상태에 저장
    const foundAccommodation = props.accommodation.find(
      (acc) => acc.id === parseInt(id) // id를 숫자로 변환하여 비교
    );
    // setAccommodation2(foundAccommodation); // 상태에 저장
  }, [id]);

  // 데이터가 없을 경우 처리
  if (!accommodation) {
    return <p>해당 숙소 정보를 찾을 수 없습니다.</p>;
  }

  return (
    <div className="detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← 뒤로가기
      </button>
      <h1>{props.location}</h1>
      <p>⭐ {props.rating}</p>
      <p>{props.dates}</p>
      <h3>₩{props.price.toLocaleString()} / 박</h3>

      <div className="image-gallery">
        {props.accommodation.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${props.location} 이미지 ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Detail;
