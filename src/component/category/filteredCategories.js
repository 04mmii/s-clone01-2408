import React, { useState } from "react";
import GridRow from "./GridRow"; // GridRow 컴포넌트 임포트

const ParentComponent = () => {
  // 카테고리 상태
  const [selectedCategory, setSelectedCategory] = useState("전체 보기");

  // 전체 카테고리 목록
  const categories = [
    { name: "국립공원", image: "/image/국립공원.jpeg" },
    { name: "료칸", image: "/image/료칸.jpeg" },
    { name: "그랜드 피아노", image: "/image/그랜드 피아노.jpeg" },
    { name: "마차", image: "/image/마차.jpeg" },
    { name: "돔하우스", image: "/image/돔하우스.jpeg" },
    { name: "복토 주택", image: "/image/복토 주택.jpeg" },
    { name: "사막", image: "/image/사막.jpeg" },
    { name: "북극", image: "/image/북극.jpeg" },
    { name: "상징적 도시", image: "/image/상징적 도시.jpeg" },
    { name: "서핑", image: "/image/서핑.jpeg" },
    { name: "스키", image: "/image/스키.jpeg" },
    // ... 나머지 카테고리
  ];

  // 선택된 카테고리에 맞는 필터링된 카테고리
  const filteredCategories =
    selectedCategory === "전체 보기"
      ? categories
      : categories.filter((category) => category.name === selectedCategory);

  return (
    <div>
      {/* 카테고리 선택 버튼 */}
      <div className="filter-options">
        <button onClick={() => setSelectedCategory("전체 보기")}>
          전체 보기
        </button>
        <button onClick={() => setSelectedCategory("국립공원")}>
          국립공원
        </button>
        <button onClick={() => setSelectedCategory("료칸")}>료칸</button>
        {/* 다른 카테고리 버튼들 */}
      </div>

      {/* 필터링된 카테고리를 GridRow 컴포넌트로 전달 */}
      <GridRow categories={filteredCategories} />
    </div>
  );
};

export default ParentComponent;
