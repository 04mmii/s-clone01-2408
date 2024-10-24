import React from "react";
import ListCard from "./ListCard";
import { data } from "../../data/data.js";
import "./List.css";

const List = () => {
  return (
    <div className="main-container">
      {/* <h1>숙소 목록</h1> */}
      <div className="card-list">
        {data.map((item, index) => (
          <ListCard
            key={index}
            images={item.images}
            title={item.title}
            location={item.location}
            price={item.price}
            date={item.date}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
