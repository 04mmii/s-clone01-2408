// src/components/detail/DateRangeSelector.js
import React, { useState } from "react";
import "./DateRangeSelector.css";

const DateRangeSelector = ({ onDateChange }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDates, setSelectedDates] = useState({
    checkIn: "2025. 4. 1.",
    checkOut: "2025. 4. 6.",
  });

  return (
    <div className="date-range-container">
      <div className="price-header">
        <h2 className="price">₩84,135</h2>
        <span className="per-night">/박</span>
      </div>

      <div className="date-selector">
        <div className="date-inputs">
          <div className="date-input">
            <label>체크인</label>
            <input
              type="text"
              value={selectedDates.checkIn}
              readOnly
              onClick={() => setShowCalendar(true)}
            />
          </div>
          <div className="date-input">
            <label>체크아웃</label>
            <input
              type="text"
              value={selectedDates.checkOut}
              readOnly
              onClick={() => setShowCalendar(true)}
            />
          </div>
        </div>

        <div className="guest-selector">
          <label>인원</label>
          <select>
            <option>게스트 1명</option>
          </select>
        </div>

        <button className="reserve-button">예약하기</button>

        <div className="price-details">
          <p>예약 확정 전에는 요금이 청구되지 않습니다.</p>
          <div className="price-item">
            <span>₩84,135 x 5박</span>
            <span>₩420,675</span>
          </div>
          <div className="price-item">
            <span>에어비앤비 서비스 수수료</span>
            <span>₩68,991</span>
          </div>
          <div className="total-price">
            <span>총 합계</span>
            <span>₩489,666</span>
          </div>
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
  );
};

export default DateRangeSelector;
