import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/header/Header";
import GridRow from "../component/category/GridRow";
import List from "../component/list/List";
import Footer from "../component/footer/footer";
import accommodations from "../data/data";

const MainPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("전체 보기");
  const [visibleCards, setVisibleCards] = useState(15);

  const filteredAccommodations =
    selectedCategory === "전체 보기"
      ? accommodations
      : accommodations.filter((a) => {
          if (!Array.isArray(a.category)) {
            return false;
          }
          return a.category.some(
            (category) =>
              category.trim().toLowerCase() ===
              selectedCategory.trim().toLowerCase()
          );
        });

  const handleLoadMore = () => {
    setVisibleCards((prev) => prev + 5);
  };

  return (
    <div className="main-page">
      <main>
        <div className="grid-row-container">
          <GridRow
            onCategorySelect={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="card-list">
          {filteredAccommodations.slice(0, visibleCards).map((a) => (
            <List
              key={a.id}
              data={a}
              onClick={() => navigate(`/detail/${a.id}`)}
            />
          ))}
        </div>
        {visibleCards < filteredAccommodations.length && (
          <div className="load-more-container">
            <button className="load-more-button" onClick={handleLoadMore}>
              더보기
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
