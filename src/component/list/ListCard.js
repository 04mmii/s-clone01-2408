import React, { useState } from "react";
import "./ListCard.css";

const ListCard = ({ images, location, distance, dates, price, rating }) => {
  // const { images, location, distance, dates, price, rating } = data;
  const [cardImage, setCardImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // 마우스 호버 상태 추적
  const [isLiked, setIsLiked] = useState(false); // 하트 클릭 상태
  const totalImages = images.length; // 총 이미지 개수

  //왼쪽으로 이동 (최소5까지 제한)
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
