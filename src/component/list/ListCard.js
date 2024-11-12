import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ListCard.css";

const ListCard = ({ id, images, location, distance, dates, price, rating }) => {
  // const { images, location, distance, dates, price, rating } = data;
  const [cardImage, setCardImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // 마우스 호버 상태 추적
  const [isLiked, setIsLiked] = useState(false); // 하트 클릭 상태
  const totalImages = images.length; // 총 이미지 개수
  const MAX_DOTS = 5; // 최대 5개의 점만 표시
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(id); // 클릭 시 콘솔에 ID 출력
    navigate(`/detail/${id}`);
  };

  //왼쪽으로 이동 (최소0까지 제한)
  const handlePrev = () => {
    if (cardImage > 0) {
      setCardImage((prevIndex) => prevIndex - 1);
    }
  };

  //오른쪽으로 이동 (최대 images.length - 1까지 제한)
  const handleNext = () => {
    if (cardImage < totalImages - 1) {
      setCardImage((prevIndex) => prevIndex + 1);
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked); // 클릭 시 좋아요 상태 변경
  };

  const getDisplayedDots = () => {
    if (totalImages <= MAX_DOTS) {
      return Array.from({ length: totalImages }, (_, i) => i); // 전체 점 표시
    } else {
      const start = Math.max(0, cardImage - Math.floor(MAX_DOTS / 2));
      const end = Math.min(totalImages, start + MAX_DOTS);
      return Array.from({ length: end - start }, (_, i) => start + i);
    }
  };

  return (
    <div className="card">
      <div
        className="image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={images[cardImage]}
          alt={`${images}이미지`}
          className="card-image"
          onClick={handleClick}
        />

        {/* 하트 버튼 */}
        <button className="like-button" onClick={toggleLike}>
          {isLiked ? "❤️" : "🤍"}
        </button>

        {isHovered && (
          <>
            {totalImages > 1 && (
              <>
                <button
                  className={`nav-button left ${
                    cardImage === 0 ? "hidden" : ""
                  }`}
                  onClick={handlePrev}
                  disabled={cardImage === 0}
                >
                  ◀
                </button>
                <button
                  className={`nav-button right ${
                    cardImage === totalImages - 1 ? "hidden" : ""
                  }`}
                  onClick={handleNext}
                  disabled={cardImage === totalImages - 1}
                >
                  ▶
                </button>
              </>
            )}
          </>
        )}

        {/* 이미지 하단에 점 표시 */}
        <div className="dots-container">
          {getDisplayedDots().map((_, index) => (
            <span
              key={index}
              className={`dot ${cardImage === index ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
      <div className="card-content">
        <div className="rating-price">
          <p className="location">{location}</p>
          <span className="rating">⭐ {rating}</span>
        </div>
        <p className="distance">{distance} 거리</p>
        <p className="dates">{dates}</p>
        <p>₩{price.toLocaleString()} / 박</p>
      </div>
    </div>
  );
};

export default ListCard;
