// Review.jsx
import React from "react";
import "./Review.css";
import { reviewData } from "../../data/reviewData";

const Review = () => {
  const { totalRating, categoryRatings, reviews } = reviewData;

  const RatingItem = ({ label, score }) => (
    <div className="rating-item">
      <span className="rating-label">{label}</span>
      <div className="rating-bar">
        <div
          className="rating-progress"
          style={{ width: `${(score / 5) * 100}%` }}
        ></div>
      </div>
      <span className="rating-score">{score}</span>
    </div>
  );

  return (
    <div className="review-container">
      <div className="review-header">
        <div className="rating-wrapper">
          <h2 className="total-rating">{totalRating}</h2>
          <div className="laurel-icons">
            <img src="/images/laurel-left.png" alt="" className="laurel left" />
            <img
              src="/images/laurel-right.png"
              alt=""
              className="laurel right"
            />
          </div>
        </div>
        <p className="rating-title">게스트 선호</p>
        <p className="rating-subtitle">평점, 후기, 신뢰도 기준</p>
        <p className="rating-description">에어비앤비에서 가장 사랑받는 숙소</p>
      </div>

      <div className="ratings-grid">
        {Object.entries(categoryRatings).map(([category, score]) => (
          <RatingItem key={category} label={category} score={score} />
        ))}
      </div>

      <div className="reviews-section">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="reviewer-profile">
              <div className="avatar">
                <span>{review.name.charAt(0)}</span>
              </div>
              <div className="reviewer-info">
                <h3>{review.name}</h3>
                <p>{review.membershipDuration}</p>
              </div>
            </div>
            <div className="review-details">
              <div className="review-meta">
                <span className="stars">{"★".repeat(5)}</span>
                <span className="review-date">{review.date}</span>
                <span className="stay-duration">{review.stayType}</span>
              </div>
              <p className="review-content">{review.content}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="show-more-reviews">후기 33개 모두 보기</button>
    </div>
  );
};

export default Review;
