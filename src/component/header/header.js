import React, { useState, useRef, useEffect } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaSearch, FaGlobe } from "react-icons/fa";

const Header = () => {
  const [selectedTab, setSelectedTab] = useState("stays");
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const locationRef = useRef(null);
  const navigate = useNavigate();

  // 팝업 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowLocationPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 로고 클릭 시 홈으로 이동
  const handleLogoClick = () => {
    navigate("/"); // 홈으로 이동
  };

  return (
    <header className="header">
      {/* 로고 */}
      <div className="header__logo" onClick={handleLogoClick}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw4vLCtSxvAtFo2TeYoo4aVtBmbXHeAk_7Q&s"
          alt="홈페이지 로고"
        />
      </div>

      <div className="header__center">
        {/* 탭 메뉴 */}
        <nav className="header__nav">
          <a
            href="#"
            onClick={() => setSelectedTab("stays")}
            className={selectedTab === "stays" ? "active" : ""}
          >
            숙소
          </a>
          <a
            href="#"
            onClick={() => setSelectedTab("experiences")}
            className={selectedTab === "experiences" ? "active" : ""}
          >
            체험
          </a>
        </nav>

        {/* 검색 바 */}
        <div className="header__search">
          {selectedTab === "stays" && (
            <>
              <div
                className="header__searchItem"
                onClick={() => setShowLocationPopup(!showLocationPopup)}
                ref={locationRef}
              >
                <span>여행지</span>
                <input type="text" placeholder="여행지 검색" />
                {showLocationPopup && (
                  <div className="locationPopup">
                    <h4>지역으로 검색하기</h4>
                    <div className="locationPopup__regions">
                      <button>유연한 검색</button>
                      <button>유럽</button>
                      <button>일본</button>
                      <button>동남아시아</button>
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
                )}
              </div>

              <div className="header__searchItem">
                <span>체크인</span>
                <input type="date" placeholder="날짜 추가" />
              </div>
              <div className="header__searchItem">
                <span>체크아웃</span>
                <input type="date" placeholder="날짜 추가" />
              </div>
              <div className="header__searchItem">
                <span>여행자</span>
                <input type="text" placeholder="게스트 추가" />
              </div>
            </>
          )}

          {selectedTab === "experiences" && (
            <>
              <div className="header__searchItem">
                <span>체험</span>
                <input type="text" placeholder="체험 검색" />
              </div>
              <div className="header__searchItem">
                <span>날짜</span>
                <input type="date" placeholder="날짜 추가" />
              </div>
              <div className="header__searchItem">
                <span>게스트</span>
                <input type="text" placeholder="게스트 추가" />
              </div>
            </>
          )}
          <button className="header__searchButton">
            <FaSearch />
          </button>
        </div>
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
