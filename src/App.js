import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import List from "./component/list/List";
import Detail from "./pages/Detail";
import Header from "./component/header/Header";
import accommodations from "./data/data";
import GridRow from "./component/category/GridRow";

const App = () => {
  const navigate = useNavigate();

  // 카테고리 선택 상태
  const [selectedCategory, setSelectedCategory] = useState("전체 보기");

  // 카드 표시 개수 상태
  const initialVisibleCount = 9;
  const [visibleCards, setVisibleCards] = useState(initialVisibleCount);

  // 카테고리에 따라 숙소 데이터 필터링
  const filteredAccommodations =
    selectedCategory === "전체 보기"
      ? accommodations
      : accommodations.filter((a) => {
          if (!Array.isArray(a.category)) {
            console.error("Invalid category format:", a.category);
            return false;
          }
          return a.category.some(
            (category) =>
              category.trim().toLowerCase() ===
              selectedCategory.trim().toLowerCase()
          );
        });
  // const filteredAccommodations =
  //   selectedCategory === "전체 보기"
  //     ? accommodations
  //     : accommodations.filter(
  //         (a) => {
  //           console.log("Category:", a.category, "Selected:", selectedCategory);
  //           return a.category.includes(selectedCategory);
  //         }
  //         // a.category && a.category.includes(selectedCategory)
  //       );

  // 더보기 버튼 클릭 시 2줄(카드 6개) 추가
  const handleLoadMore = () => {
    setVisibleCards((prev) => prev + 6);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <header>
              <Header />
            </header>

            {/* 카테고리 선택 컴포넌트 */}
            <div className="grid-row-container">
              <GridRow
                onCategorySelect={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            </div>

            {/* 필터링된 숙소 리스트 */}
            <div className="card-list">
              {filteredAccommodations.slice(0, visibleCards).map((a) => (
                <List
                  accommodations={filteredAccommodations}
                  onClick={() => navigate(`/detail/${a.id}`)}
                  key={a.id}
                  data={a}
                />
              ))}
            </div>

            {/* 더보기 버튼 */}
            {visibleCards < filteredAccommodations.length && (
              <div className="load-more-container">
                <button className="load-more-button" onClick={handleLoadMore}>
                  더보기
                </button>
              </div>
            )}
          </>
        }
      />
      <Route
        path="/detail/:id"
        element={
          <>
            <header>
              <Header />
            </header>
            <Detail accommodations={accommodations} />
          </>
        }
      />
    </Routes>
  );
};

export default App;
