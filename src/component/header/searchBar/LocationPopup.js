import React from "react";
import { BiWorld } from "react-icons/bi";
import {
  GiEarthAfricaEurope,
  GiJapan,
  GiEarthAsiaOceania,
} from "react-icons/gi";

const LocationPopup = () => {
  return (
    <div className="locationPopup" onClick={(e) => e.stopPropagation()}>
      <h4>지역으로 검색하기</h4>
      <div className="locationPopup__regions">
        <div className="region-item">
          <BiWorld />
          <span>유연한 검색</span>
        </div>
        <div className="region-item">
          <GiEarthAfricaEurope />
          <span>유럽</span>
        </div>
        <div className="region-item">
          <GiJapan />
          <span>일본</span>
        </div>
        <div className="region-item">
          <GiEarthAsiaOceania />
          <span>동남아시아</span>
        </div>
      </div>

      <h4>한국</h4>
      <div className="locationPopup__cities">
        <button>서울</button>
        <button>부산</button>
        <button>제주도</button>
        <button>속초</button>
        <button>강릉</button>
        <button>전주</button>
        <button>대구</button>
        <button>경주</button>
        <button>여수</button>
        <button>서귀포</button>
        <button>대전</button>
        <button>인천</button>
      </div>
      <h4>해외</h4>
      <div className="locationPopup__world">
        <button>오사카</button>
        <button>도쿄</button>
        <button>후쿠오카</button>
        <button>방콕</button>
        <button>런던</button>
        <button>치앙마이</button>
        <button>타이베이</button>
        <button>시드니</button>
      </div>
    </div>
  );
};

export default LocationPopup;
