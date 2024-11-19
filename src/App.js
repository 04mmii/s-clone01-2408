import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import List from "./component/list/List";
import Detail from "./pages/Detail";
import Header from "./component/header/header.js";
import GridRow from "./component/category/category.js";
import accommodation from "./data/data.js";

const App = () => {
  const [accommodations, setAccommodations] = useState(accommodation);
  const [filteredCategory, setFilteredCategory] = useState("");
  const navigate = useNavigate();

  // 카테고리 필터링
  const handleCategorySelect = (category) => {
    setFilteredCategory(category);
    if (category === "") {
      setAccommodations(accommodation); // 전체 보기
    } else {
      setAccommodations(
        accommodation.filter((item) => item.category === category)
      );
    }
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

            <div className="Category">
              <h1>Choose a Category</h1>
              <GridRow onCategorySelect={handleCategorySelect} />{" "}
              {/* 카테고리 */}
            </div>

            <div className="card-list">
              {accommodations.map((a) => (
                <List
                  onClick={() => navigate(`/detail/${a.id}`)}
                  key={a.id}
                  data={a}
                />
              ))}
            </div>
          </>
        }
      />
      <Route
        path="/detail/:id"
        element={<Detail accommodations={accommodations} />}
      />
    </Routes>
  );
};

export default App;
