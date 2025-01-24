import React from "react";
import "./GuestsPopup.css";

const GuestsPopup = ({ guestCounts, onGuestChange }) => {
  return (
    <div className="guestsPopup" onClick={(e) => e.stopPropagation()}>
      <GuestTypeRow
        type="adults"
        label="성인"
        ageInfo="13세 이상"
        count={guestCounts.adults}
        onChange={onGuestChange}
      />
      <GuestTypeRow
        type="children"
        label="어린이"
        ageInfo="2-12세"
        count={guestCounts.children}
        onChange={onGuestChange}
      />
      <GuestTypeRow
        type="infants"
        label="유아"
        ageInfo="2세 미만"
        count={guestCounts.infants}
        onChange={onGuestChange}
      />
      <GuestTypeRow
        type="pets"
        label="반려동물"
        ageInfo="보조동물을 동반하시나요?"
        count={guestCounts.pets}
        onChange={onGuestChange}
      />
    </div>
  );
};

const GuestTypeRow = ({ type, label, ageInfo, count, onChange }) => (
  <div className="guest-type">
    <div className="guest-info">
      <h3>{label}</h3>
      <p>{ageInfo}</p>
    </div>
    <div className="guest-controls">
      <button onClick={() => onChange(type, "decrement")}>-</button>
      <span>{count}</span>
      <button onClick={() => onChange(type, "increment")}>+</button>
    </div>
  </div>
);

export default GuestsPopup;
