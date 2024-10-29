import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import List from "./component/list/List";
import Detail from "./pages/Detail";
import accommodations from "./data/data";

const App = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={
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
