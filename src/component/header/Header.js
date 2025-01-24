import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { FaUserCircle, FaSearch, FaGlobe } from "react-icons/fa";
import SearchItem from "./searchBar/SearchItem";
import LocationPopup from "./searchBar/LocationPopup";
import DateRangePopup from "./searchBar/DateRangePopup";
import GuestsPopup from "./searchBar/GuestsPopup";

const Header = ({ startDate, endDate, setStartDate, setEndDate }) => {
  const [selectedTab, setSelectedTab] = useState("stays");
  const [activeItem, setActiveItem] = useState(null);
  const searchItemsRef = useRef({});

  const handleItemClick = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeItem &&
        searchItemsRef.current[activeItem] &&
        !searchItemsRef.current[activeItem].contains(event.target)
      ) {
        setActiveItem(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeItem]);

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const formatDate = (date) => {
    if (!date) return "";
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}월 ${day}일`;
  };

  const handleDateSelect = (date, type) => {
    if (type === "checkIn") {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
    setActiveItem(null);
  };

  const [guestCounts, setGuestCounts] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const handleGuestChange = (type, operation) => {
    setGuestCounts((prev) => ({
      ...prev,
      [type]:
        operation === "increment"
          ? prev[type] + 1
          : Math.max(type === "adults" ? 1 : 0, prev[type] - 1),
    }));
  };

  const getTotalGuestCount = () => {
    return guestCounts.adults + guestCounts.children;
  };

  return (
    <header className="header">
      <div className="header__center">
        <div className="header__top">
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

        <div className="search__container">
          <div
            className={`header__search ${
              selectedTab === "stays" ? "active-tab stays" : "experiences"
            }`}
          >
            {selectedTab === "stays" ? (
              <>
                <SearchItem
                  label="여행지"
                  placeholder="여행지 검색"
                  isActive={activeItem === "location"}
                  onClick={() => handleItemClick("location")}
                  ref={(el) => (searchItemsRef.current.location = el)}
                >
                  {activeItem === "location" && <LocationPopup />}
                </SearchItem>

                <SearchItem
                  label="체크인"
                  placeholder="날짜 추가"
                  value={startDate ? formatDate(startDate) : "날짜 추가"}
                  isActive={activeItem === "checkIn"}
                  onClick={() => handleItemClick("checkIn")}
                  ref={(el) => (searchItemsRef.current.checkIn = el)}
                >
                  {activeItem === "checkIn" && (
                    <DateRangePopup
                      onDateSelect={handleDateSelect}
                      selectedStartDate={startDate}
                      selectedEndDate={endDate}
                      type="checkIn"
                    />
                  )}
                </SearchItem>

                <SearchItem
                  label="체크아웃"
                  placeholder="날짜 추가"
                  value={endDate ? formatDate(endDate) : "날짜 추가"}
                  isActive={activeItem === "checkOut"}
                  onClick={() => handleItemClick("checkOut")}
                  ref={(el) => (searchItemsRef.current.checkOut = el)}
                >
                  {activeItem === "checkOut" && (
                    <DateRangePopup
                      onDateSelect={handleDateSelect}
                      selectedStartDate={startDate}
                      selectedEndDate={endDate}
                      type="checkOut"
                    />
                  )}
                </SearchItem>
                <SearchItem
                  label="여행자"
                  placeholder="게스트 추가"
                  value={`게스트 ${getTotalGuestCount()}명${
                    guestCounts.infants > 0
                      ? `, 유아 ${guestCounts.infants}명`
                      : ""
                  }${
                    guestCounts.pets > 0
                      ? `, 반려동물 ${guestCounts.pets}마리`
                      : ""
                  }`}
                  isActive={activeItem === "guests"}
                  onClick={() => handleItemClick("guests")}
                  ref={(el) => (searchItemsRef.current.guests = el)}
                  isLastItem={true}
                >
                  {activeItem === "guests" && (
                    <GuestsPopup
                      guestCounts={guestCounts}
                      onGuestChange={handleGuestChange}
                    />
                  )}
                </SearchItem>
              </>
            ) : (
              <>
                <SearchItem
                  label="체험"
                  placeholder="체험 검색"
                  isActive={activeItem === "experience"}
                  onClick={() => handleItemClick("experience")}
                  ref={(el) => (searchItemsRef.current.experience = el)}
                />

                <SearchItem
                  label="날짜"
                  placeholder="날짜 추가"
                  value={startDate ? formatDate(startDate) : "날짜 추가"}
                  isActive={activeItem === "checkIn"}
                  onClick={() => handleItemClick("checkIn")}
                  ref={(el) => (searchItemsRef.current.checkIn = el)}
                >
                  {activeItem === "checkIn" && (
                    <DateRangePopup
                      onDateSelect={(date) => handleDateSelect(date, "checkIn")}
                      selectedStartDate={startDate}
                      selectedEndDate={endDate}
                      type="checkIn"
                    />
                  )}
                </SearchItem>

                <SearchItem
                  label="여행자"
                  placeholder="게스트 추가"
                  value={`게스트 ${getTotalGuestCount()}명${
                    guestCounts.infants > 0
                      ? `, 유아 ${guestCounts.infants}명`
                      : ""
                  }${
                    guestCounts.pets > 0
                      ? `, 반려동물 ${guestCounts.pets}마리`
                      : ""
                  }`}
                  isActive={activeItem === "guests"}
                  onClick={() => handleItemClick("guests")}
                  ref={(el) => (searchItemsRef.current.guests = el)}
                  isLastItem={true}
                >
                  {activeItem === "guests" && (
                    <GuestsPopup
                      guestCounts={guestCounts}
                      onGuestChange={handleGuestChange}
                    />
                  )}
                </SearchItem>
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
