import React from "react";
import "./Header.css";
import { FaUserCircle, FaSearch, FaGlobe } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      {/* 로고 */}
      <div className="header__logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw4vLCtSxvAtFo2TeYoo4aVtBmbXHeAk_7Q&s" />
      </div>

      {/* 탐색 메뉴 */}
      <nav className="header__nav">
        <a href="/stays">숙소</a>
        <a href="/experiences">체험</a>
      </nav>

      {/* 검색바 */}
      <div className="header__search">
        <div className="header__searchItem">
          <span>여행지</span>
          <input type="text" placeholder="여행지 검색" />
        </div>
        <div className="header__searchItem">
          <span>체크인</span>
          <input type="text" placeholder="날짜 추가" />
        </div>
        <div className="header__searchItem">
          <span>체크아웃</span>
          <input type="text" placeholder="날짜 추가" />
        </div>
        <div className="header__searchItem">
          <span>여행자</span>
          <input type="text" placeholder="게스트 추가" />
        </div>
        <button className="header__searchButton">
          <FaSearch />
        </button>
      </div>

      {/* 프로필 메뉴 */}
      <div className="header__profile">
        <span>당신의 공간을 에어비앤비하세요</span>
        <FaGlobe className="header__icon" />
        <div className="header__user">
          <FaUserCircle size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
