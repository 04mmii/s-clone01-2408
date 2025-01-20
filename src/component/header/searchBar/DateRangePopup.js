import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DateRangePopup.css";

const Calendar = ({
  month,
  year,
  onDateSelect,
  selectedDate,
  minDate,
  maxDate,
}) => {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const getDaysInMonth = () => {
    const firstDay = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();
    const days = [];
    for (let i = 0; i < firstDay; i++) days.push("");
    for (let i = 1; i <= daysInMonth; i++) days.push(i);
    return days;
  };

  const isDateSelectable = (day) => {
    if (!day) return false;
    const date = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (minDate && date < minDate) return false;
    if (maxDate && date > maxDate) return false;
    return date >= today;
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
              className={`day ${!day ? "empty" : ""} 
                ${isDateSelectable(day) ? "selectable" : "disabled"}
                ${
                  selectedDate &&
                  selectedDate.getDate() === day &&
                  selectedDate.getMonth() === month - 1 &&
                  selectedDate.getFullYear() === year
                    ? "selected"
                    : ""
                }`}
              onClick={() =>
                isDateSelectable(day) &&
                onDateSelect(new Date(year, month - 1, day))
              }
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DateRangePopup = ({
  onDateSelect,
  selectedStartDate,
  selectedEndDate,
  type,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleDateSelect = (date) => {
    onDateSelect(date);
  };

  const formatDate = (date) => {
    if (!date) return "";
    return date.toISOString().split("T")[0];
  };

  return (
    <div className="dateRange-popup">
      <div className="dateRange-tabs">
        <button className="tab active">날짜 지정</button>
        <button className="tab">월 단위</button>
        <button className="tab">유연한 일정</button>
      </div>
      <div className="dateRange-container">
        <Calendar
          month={currentMonth}
          year={currentYear}
          onDateSelect={handleDateSelect}
          selectedDate={
            type === "checkIn" ? selectedStartDate : selectedEndDate
          }
          minDate={
            type === "checkOut" && selectedStartDate ? selectedStartDate : null
          }
        />
        <Calendar
          month={currentMonth + 1 > 12 ? 1 : currentMonth + 1}
          year={currentMonth + 1 > 12 ? currentYear + 1 : currentYear}
          onDateSelect={handleDateSelect}
          selectedDate={
            type === "checkIn" ? selectedStartDate : selectedEndDate
          }
          minDate={
            type === "checkOut" && selectedStartDate ? selectedStartDate : null
          }
        />
      </div>
      <div className="flexible-dates">
        <button className="flexible-date-btn active">정확한 날짜</button>
        <button className="flexible-date-btn">±1일</button>
        <button className="flexible-date-btn">±2일</button>
        <button className="flexible-date-btn">±3일</button>
        <button className="flexible-date-btn">±7일</button>
      </div>
    </div>
  );
};

export default DateRangePopup;
