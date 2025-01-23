import React from "react";

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
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const days = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(i);
    }

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
      <div className="weekdays">
        {daysOfWeek.map((day) => (
          <div key={day} className="weekday">
            {day}
          </div>
        ))}
      </div>
      <div className="days">
        {getDaysInMonth().map((date, index) => (
          <div
            key={index}
            className={`day ${!date ? "empty" : ""} 
              ${isDateSelectable(date) ? "selectable" : "disabled"}
              ${
                selectedDate &&
                selectedDate.getDate() === date &&
                selectedDate.getMonth() === month - 1 &&
                selectedDate.getFullYear() === year
                  ? "selected"
                  : ""
              }`}
            onClick={() =>
              isDateSelectable(date) &&
              onDateSelect(new Date(year, month - 1, date))
            }
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
