import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaSearch, FaGlobe } from "react-icons/fa";

const Header = () => {
  const [selectedTab, setSelectedTab] = useState("stays");
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [isLocationActive, setIsLocationActive] = useState(false);
  const locationRef = useRef(null);
  const navigate = useNavigate();

  const handleLocationClick = (e) => {
    e.stopPropagation();
    setShowLocationPopup(true);
    setIsLocationActive(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowLocationPopup(false);
        setIsLocationActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header__center">
        <div className="header__top">
          {/* 로고 */}
          <div className="header__logo" onClick={handleLogoClick}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw4vLCtSxvAtFo2TeYoo4aVtBmbXHeAk_7Q&s"
              alt="홈페이지 로고"
            />
          </div>

          <nav className="header__nav">
            <button
              onClick={() => setSelectedTab("stays")}
              className={`header__nav-button ${
                selectedTab === "stays" ? "active" : ""
              }`}
            >
              숙소
            </button>
            <button
              onClick={() => setSelectedTab("experiences")}
              className={`header__nav-button ${
                selectedTab === "experiences" ? "active" : ""
              }`}
            >
              체험
            </button>
          </nav>

          {/* 프로필 메뉴 */}
          <div className="header__profile">
            <span className="header__profile-span">
              당신의 공간을 에어비앤비하세요
            </span>
            <FaGlobe className="header__icon" />
            <div className="header__user">
              <FaUserCircle size={24} />
            </div>
          </div>
        </div>

        {/* 검색 바 */}
        <div className="search__container">
          <div className="header__search">
            {selectedTab === "stays" && (
              <>
                <div
                  className={`header__searchItem ${
                    isLocationActive ? "active" : ""
                  }`}
                  onClick={handleLocationClick}
                  ref={locationRef}
                >
                  <span>여행지</span>
                  <input
                    type="text"
                    placeholder="여행지 검색"
                    onClick={(e) => e.stopPropagation()}
                  />
                  {showLocationPopup && (
                    <div
                      className="locationPopup"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <h4>지역으로 검색하기</h4>
                      <div className="locationPopup__regions">
                        <div className="region-item">
                          <img src="/world-map.png" alt="유연한 검색" />
                          <span>유연한 검색</span>
                        </div>
                        <div className="region-item">
                          <img src="/europe-map.png" alt="유럽" />
                          <span>유럽</span>
                        </div>
                        <div className="region-item">
                          <img src="/japan-map.png" alt="일본" />
                          <span>일본</span>
                        </div>
                        <div className="region-item">
                          <img src="/asia-map.png" alt="동남아시아" />
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
      </div>
    </header>
  );
};

export default Header;
