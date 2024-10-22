import React from "react";
import "./List.css";
import ListCard from "./ListCard";
import { data } from "../../data/data.js";

const List = () => {
  return (
    <div className="main-container">
      {/* <h1>숙소 목록</h1> */}
      <div className="card-list">
        {data.map((acc, index) => (
          <ListCard key={index} data={acc} />
        ))}
      </div>
    </div>
  );
};

export default List;
