import React, { useState } from "react";
import "./GuestsPopup.css";

const GuestsPopup = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const handleIncrement = (setter, value) => {
    setter(value + 1);
  };

  const handleDecrement = (setter, value) => {
    if (value > 0) {
      setter(value - 1);
    }
  };

  return (
    <div className="guestsPopup" onClick={(e) => e.stopPropagation()}>
      <div className="guest-type">
        <div className="guest-info">
          <h3>성인</h3>
          <p>13세 이상</p>
        </div>
        <div className="guest-controls">
          <button onClick={() => handleDecrement(setAdults, adults)}>-</button>
          <span>{adults}</span>
          <button onClick={() => handleIncrement(setAdults, adults)}>+</button>
        </div>
      </div>

      <div className="guest-type">
        <div className="guest-info">
          <h3>어린이</h3>
          <p>2-12세</p>
        </div>
        <div className="guest-controls">
          <button onClick={() => handleDecrement(setChildren, children)}>
            -
          </button>
          <span>{children}</span>
          <button onClick={() => handleIncrement(setChildren, children)}>
            +
          </button>
        </div>
      </div>

      <div className="guest-type">
        <div className="guest-info">
          <h3>유아</h3>
          <p>2세 미만</p>
        </div>
        <div className="guest-controls">
          <button onClick={() => handleDecrement(setInfants, infants)}>
            -
          </button>
          <span>{infants}</span>
          <button onClick={() => handleIncrement(setInfants, infants)}>
            +
          </button>
        </div>
      </div>

      <div className="guest-type">
        <div className="guest-info">
          <h3>반려동물</h3>
          <p>보조동물을 동반하시나요?</p>
        </div>
        <div className="guest-controls">
          <button onClick={() => handleDecrement(setPets, pets)}>-</button>
          <span>{pets}</span>
          <button onClick={() => handleIncrement(setPets, pets)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default GuestsPopup;
