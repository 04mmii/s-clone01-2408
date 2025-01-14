import React, { useState } from "react";
import "./DateRangeSelector.css";

const DateRangeSelector = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [guestCounts, setGuestCounts] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const handleDecrease = (type) => {
    setGuestCounts((prev) => ({
      ...prev,
      [type]:
        type === "adults"
          ? Math.max(1, prev[type] - 1)
          : Math.max(0, prev[type] - 1),
    }));
  };

  const handleIncrease = (type) => {
    setGuestCounts((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const GuestTypeRow = ({ type, label, ageInfo }) => (
    <div className="guest-type">
      <div className="guest-info">
        <span>{label}</span>
        <span className="age-info">{ageInfo}</span>
      </div>
      <div className="counter">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDecrease(type);
          }}
          className="counter-btn"
        >
          -
        </button>
        <span>{guestCounts[type]}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleIncrease(type);
          }}
          className="counter-btn"
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <div className="price-container">
      <div className="price-header">
        <h2 className="price">₩402,334</h2>
        <span className="per-night">/박</span>
      </div>

      <div className="booking-form">
        <div className="date-inputs">
          <div className="date-input">
            <label>체크인</label>
            <input type="text" value="2025. 1. 12." readOnly />
          </div>
          <div className="date-input">
            <label>체크아웃</label>
            <input type="text" value="2025. 1. 17." readOnly />
          </div>
        </div>

        <div
          className="guest-selector"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <label>인원</label>
          <div className="guest-input">
            <span>게스트 {guestCounts.adults + guestCounts.children}명</span>
          </div>

          {showDropdown && (
            <div className="guest-dropdown">
              <GuestTypeRow type="adults" label="성인" ageInfo="13세 이상" />
              <GuestTypeRow type="children" label="어린이" ageInfo="2-12세" />
              <GuestTypeRow type="infants" label="유아" ageInfo="2세 미만" />
              <GuestTypeRow
                type="pets"
                label="반려동물"
                ageInfo="보조동물을 동반하시나요?"
              />

              <p className="max-guests-notice">
                이 숙소의 최대 숙박 인원은 8명(유아 제외)입니다.
                <br />
                반려동물을 동반하지 않습니다.
              </p>
              <button
                className="close-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDropdown(false);
                }}
              >
                닫기
              </button>
            </div>
          )}
        </div>

        <button className="reserve-button">예약하기</button>

        <div className="price-details">
          <p>예약 확정 전에는 요금이 청구되지 않습니다.</p>
          <div className="price-item">
            <span>₩402,334 x 5박</span>
            <span>₩2,011,670</span>
          </div>
          <div className="price-item">
            <span>에어비앤비 서비스 수수료</span>
            <span>₩201,167</span>
          </div>
          <div className="total-price">
            <span>총 합계</span>
            <span>₩2,212,837</span>
          </div>
        </div>

        <div className="special-offer">
          <span className="diamond-icon">💎</span>
          <p>
            흔치 않은 기회
            <br />
            Suzana 님의 숙소는 보통 예약이 가득 차 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DateRangeSelector;
