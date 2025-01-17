import React from "react";
import "./DateRangePopup.css";

const Calendar = ({ month, year }) => {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const getDaysInMonth = () => {
    const firstDay = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();

    const days = [];
    // 첫 주 빈 칸 채우기
    for (let i = 0; i < firstDay; i++) {
      days.push("");
    }
    // 날짜 채우기
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h4>
          {year}년 {month}월
        </h4>
      </div>
      <div className="calendar-grid">
        <div className="weekdays">
          {daysOfWeek.map((day) => (
            <div key={day} className="weekday">
              {day}
            </div>
          ))}
        </div>
        <div className="days">
          {getDaysInMonth().map((day, index) => (
            <div
              key={index}
              className={`day ${day === 17 && month === 1 ? "today" : ""}`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DateRangePopup = () => {
  return (
    <div className="dateRange-popup">
      <div className="dateRange-tabs">
        <button className="tab active">날짜 지정</button>
        <button className="tab">월 단위</button>
        <button className="tab">유연한 일정</button>
      </div>
      <div className="dateRange-container">
        <Calendar month={1} year={2025} />
        <Calendar month={2} year={2025} />
      </div>
      <div className="dateRange-footer">
        <div className="flexible-dates">
          <button className="flexible-date-btn active">정확한 날짜</button>
          <button className="flexible-date-btn">±1일</button>
          <button className="flexible-date-btn">±2일</button>
          <button className="flexible-date-btn">±3일</button>
          <button className="flexible-date-btn">±7일</button>
        </div>
        <div className="action-buttons">
          <button className="calendar-clear">날짜 지우기</button>
          <button className="calendar-close">닫기</button>
        </div>
      </div>
    </div>
  );
};

export default DateRangePopup;
