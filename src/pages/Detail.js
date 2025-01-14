import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Detail.css";
import ImageGallery from "../component/detail/ImageGallery ";
import AccommodationInfo from "../component/detail/AccommodationInfo";
import DateRangeSelector from "../component/detail/DateRangeSelector";
import Review from "../component/detail/Review";

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
      <ImageGallery images={images} />
      <div className="detail-info">
        <AccommodationInfo
          location={location}
          dates={dates}
          price={price}
          rating={rating}
        />
        <div className="booking-section">
          <DateRangeSelector />
        </div>
      </div>
      <div>
        <Review />
      </div>
    </div>
  );
};

export default Detail;
