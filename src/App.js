import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import Detail from "./pages/Detail";
import Header from "./component/header/Header";
import Footer from "./component/footer/footer";
import accommodations from "./data/data";
import "./App.css";

const App = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="app">
      <Header
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          }
        />
        <Route
          path="/detail/:id"
          element={
            <>
              <Detail
                accommodations={accommodations}
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
