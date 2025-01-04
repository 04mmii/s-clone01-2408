import React, { useRef, useEffect, useState } from "react";
import "./GridRow.css";

const GridRow = ({ onCategorySelect, selectedCategory }) => {
  const categories = [
    // { name: "전체 보기", image: "/image/all.jpeg" },
    { name: "인기 급상승", image: "/image/인기 급상승.jpeg" },
    { name: "국립공원", image: "/image/국립공원.jpeg" },
    { name: "료칸", image: "/image/료칸.jpeg" },
    { name: "돔하우스", image: "/image/돔하우스.jpeg" },
    { name: "서핑", image: "/image/서핑.jpeg" },
    { name: "기상천외한 숙소", image: "/image/기상천외한 숙소.jpeg" },
    { name: "농장", image: "/image/농장.jpeg" },
    { name: "담무소", image: "/image/담무소.jpeg" },
    { name: "창작공간", image: "/image/창작 공간.jpeg" },
    { name: "동굴", image: "/image/동굴.jpeg" },
    { name: "디자인", image: "/image/디자인.jpeg" },
    { name: "마차", image: "/image/마차.jpeg" },
    { name: "수영장", image: "/image/멋진 수영장.jpeg" },
    { name: "보트", image: "/image/보트.jpeg" },
    { name: "북극", image: "/image/북극.jpeg" },
    { name: "사막", image: "/image/사막.jpeg" },
    { name: "상징적 도시", image: "/image/상징적 도시.jpeg" },
    { name: "스키", image: "/image/스키.jpeg" },
    { name: "섬", image: "/image/섬.jpeg" },
    { name: "신규", image: "/image/신규.jpeg" },
    { name: "와인농장", image: "/image/와인 농장.jpeg" },
    { name: "저택", image: "/image/저택.jpeg" },
    { name: "캠핑", image: "/image/캠핑장.jpeg" },
    { name: "풍차", image: "/image/풍차.jpeg" },
    { name: "통나무집", image: "/image/통나무집.jpeg" },
    { name: "키즈", image: "/image/키즈.jpg" },
    { name: "한옥", image: "/image/한옥.jpeg" },
    { name: "호수", image: "/image/호숫가.jpeg" },
    { name: "해변", image: "/image/해변 근처.jpeg" },
  ];

  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // 스크롤 위치에 따른 화살표 표시 업데이트
  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
  };

  // 스크롤 방향 처리
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left")
      current.scrollBy({ left: -200, behavior: "smooth" });
    else current.scrollBy({ left: 200, behavior: "smooth" });
  };

  // // 카테고리 선택 처리
  // const categorySelect = (category) => {
  //   setSelectedCategory(category);
  //   categorySelect(category);
  // };

  useEffect(() => {
    handleScroll();
    // 스크롤 이벤트 리스너 추가
    const ref = scrollRef.current;
    ref.addEventListener("scroll", handleScroll);
    return () => {
      ref.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="grid-row-container">
      {showLeftArrow && (
        <button className="scroll-button left" onClick={() => scroll("left")}>
          ◀
        </button>
      )}

      <div className="grid-row" ref={scrollRef}>
        {categories.map((category, id) => (
          <div
            className={`category-item ${
              selectedCategory === category.name ? "active" : ""
            }`}
            key={id}
            onClick={() => {
              if (selectedCategory !== category.name) {
                onCategorySelect(category.name);
              } // 상위 컴포넌트로 카테고리 전달
            }}
          >
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>

      {showRightArrow && (
        <button className="scroll-button right" onClick={() => scroll("right")}>
          ▶
        </button>
      )}
    </div>
  );
};

export default GridRow;
