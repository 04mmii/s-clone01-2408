import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./component/list/List";
import AccommodationDetail from "./component/AccommodationDetail";
import accommodations from "./data/data";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="card-list">
              {accommodations.map((acc) => (
                <List key={acc.id} data={acc} />
              ))}
            </div>
          }
        />
        <Route path="/accommodation/:id" element={<AccommodationDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
