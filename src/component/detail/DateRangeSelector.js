import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateRangeSelector.css";
import { format } from "date-fns";

const DateRangeSelector = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  const [guestCounts, setGuestCounts] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const [showDropdown, setShowDropdown] = useState(false);

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

  return (
    <div className="price-container">
      <div className="price-header">
        <div className="price-wrapper">
          <span className="original-price">₩92,600</span>
          <h2 className="discounted-price">₩83,340</h2>
          <span className="per-night">/박</span>
        </div>
      </div>

      <div className="booking-form">
        <div className="booking-pick">
          <div className="date-inputs-d">
            <div className="date-input-d">
              <label>체크인</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="yyyy.MM.dd"
                placeholderText="날짜 선택"
                minDate={new Date()}
                monthsShown={2}
                renderCustomHeader={({
                  date,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                }) => (
                  <div className="custom-header-m">
                    <button
                      onClick={decreaseMonth}
                      disabled={prevMonthButtonDisabled}
                    >
                      {"<"}
                    </button>
                    <span>{format(date, "yyyy년 M월")}</span>
                    <button
                      onClick={increaseMonth}
                      disabled={nextMonthButtonDisabled}
                    >
                      {">"}
                    </button>
                  </div>
                )}
              />
            </div>
            <div className="date-input-d">
              <label>체크아웃</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                dateFormat="yyyy.MM.dd"
                minDate={startDate || new Date()}
                placeholderText="날짜 선택"
                monthsShown={2}
                renderCustomHeader={({
                  date,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                }) => (
                  <div className="custom-header-m">
                    <button
                      onClick={decreaseMonth}
                      disabled={prevMonthButtonDisabled}
                    >
                      {"<"}
                    </button>
                    <span>{format(date, "yyyy년 M월")}</span>
                    <button
                      onClick={increaseMonth}
                      disabled={nextMonthButtonDisabled}
                    >
                      {">"}
                    </button>
                  </div>
                )}
              />
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
                <GuestTypeRow
                  type="adults"
                  label="성인"
                  ageInfo="13세 이상"
                  guestCounts={guestCounts}
                  handleDecrease={handleDecrease}
                  handleIncrease={handleIncrease}
                />
                <GuestTypeRow
                  type="children"
                  label="어린이"
                  ageInfo="2-12세"
                  guestCounts={guestCounts}
                  handleDecrease={handleDecrease}
                  handleIncrease={handleIncrease}
                />
                <GuestTypeRow
                  type="infants"
                  label="유아"
                  ageInfo="2세 미만"
                  guestCounts={guestCounts}
                  handleDecrease={handleDecrease}
                  handleIncrease={handleIncrease}
                />
                <GuestTypeRow
                  type="pets"
                  label="반려동물"
                  ageInfo="보조동물을 동반하시나요?"
                  guestCounts={guestCounts}
                  handleDecrease={handleDecrease}
                  handleIncrease={handleIncrease}
                />
                <p className="max-guests-notice">
                  이 숙소의 최대 숙박 인원은 8명(유아 제외)입니다.
                  <br />
                  반려동물을 동반하지 않습니다.
                </p>
                <button
                  className="close-btn"
                  onClick={() => setShowDropdown(false)}
                >
                  닫기
                </button>
              </div>
            )}
          </div>
        </div>

        <button className="reserve-button">예약하기</button>

        <div className="price-details">
          <p>예약 확정 전에는 요금이 청구되지 않습니다.</p>
          <div className="price-item">
            <span>₩83,340 x 25박</span>
            <span>₩2,083,500</span>
          </div>
          <div className="price-item">
            <span>에어비앤비 서비스 수수료</span>
            <span>₩208,350</span>
          </div>
          <div className="total-price">
            <span>총 합계</span>
            <span>₩2,291,850</span>
          </div>
        </div>

        <div className="special-offer">
          <span className="diamond-icon">💎</span>
          <p>
            <em>저렴한 요금</em>
            <br />이 날짜의 요금은 해당 숙소의 평균 요금보다
            <br />
            10% 저렴합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

const GuestTypeRow = ({
  type,
  label,
  ageInfo,
  guestCounts,
  handleDecrease,
  handleIncrease,
}) => (
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

export default DateRangeSelector;
