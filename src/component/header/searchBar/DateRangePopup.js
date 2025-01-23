import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format, addMonths, isBefore, startOfDay } from "date-fns";
import ko from "date-fns/locale/ko";
import "react-day-picker/dist/style.css";
import "./DateRangePopup.css";

const DateRangePopup = ({
  onDateSelect,
  selectedStartDate,
  selectedEndDate,
  type: initialType,
}) => {
  const [range, setRange] = useState({
    from: selectedStartDate ? new Date(selectedStartDate) : undefined,
    to: selectedEndDate ? new Date(selectedEndDate) : undefined,
  });
  const [type, setType] = useState(initialType);

  const handleRangeSelect = (newRange) => {
    setRange(newRange);
    if (newRange?.from) {
      onDateSelect(newRange.from, "checkIn");
      setType("checkOut");
    }
    if (newRange?.to) {
      onDateSelect(newRange.to, "checkOut");
    }
  };

  const today = startOfDay(new Date());

  const isPastDay = (day) => {
    return isBefore(day, today);
  };

  return (
    <div className="dateRange-popup" onClick={(e) => e.stopPropagation()}>
      <div className="dateRange-tabs">
        <button className="tab active">날짜 지정</button>
        <button className="tab">월 단위</button>
        <button className="tab">유연한 일정</button>
      </div>

      <div className="dateRange-container">
        <DayPicker
          mode="range"
          selected={range}
          onSelect={handleRangeSelect}
          numberOfMonths={2}
          fromMonth={today}
          toMonth={addMonths(today, 11)}
          locale={ko}
          captionLayout="dropdown"
          disabled={isPastDay}
          formatters={{
            formatCaption: (date, options) =>
              format(date, "yyyy년 MM월", { locale: options?.locale }),
          }}
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
