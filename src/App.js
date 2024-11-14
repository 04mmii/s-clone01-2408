import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import List from "./component/list/List";
import Detail from "./pages/Detail";
import Header from "./component/header/header.js";
import GridRow from "./component/category/category.js";
import { fetchHotels } from "./api/amadeus";

const App = () => {
  const [accommodations, setAccommodations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadHotels = async () => {
      try {
        const data = await fetchHotels("NYC", "2024-11-10", "2024-11-15");
        setAccommodations(data.data); // 가져온 데이터로 상태 업데이트
      } catch (error) {
        console.error("Error fetching accommodations:", error);
      }
    };
    loadHotels();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <header>
              <Header />
            </header>

            <div classname="Category">
              <h1>My Grid Example</h1>
              <GridRow /> {/* GridRow 컴포넌트를 렌더링 */}
            </div>

            <div className="card-list">
              {accommodations.map((a, i) => {
                return (
                  <List
                    onClick={() => navigate(`/detail/${a.hotel.hotelId}`)}
                    key={a.hotel.hotelId}
                    data={a}
                    // accommodations={accommodations[i]}
                  />
                );
              })}
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
