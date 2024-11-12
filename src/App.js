import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import List from "./component/list/List";
import Detail from "./pages/Detail";
import Header from "./component/header/header.js";
import accommodations from "./data/data";
import GridRow from '/Users/heeji/s-clone01-2408/src/component/category/category.js';

const App = () => {
  const navigate = useNavigate();

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
                  <GridRow />  {/* GridRow 컴포넌트를 렌더링 */}
              </div>
            <div className="card-list">
              {accommodations.map((a, i) => {
                return (
                  <List
                    onClick={() => navigate("/detail:id")}
                    key={a}
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
