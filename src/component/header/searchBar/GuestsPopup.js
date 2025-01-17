import React from "react";

const GuestsPopup = () => {
  return (
    <div className="guestsPopup" onClick={(e) => e.stopPropagation()}>
      {/* 게스트 선택 내용을 여기에 추가하세요 */}
    </div>
  );
};

export default GuestsPopup;
