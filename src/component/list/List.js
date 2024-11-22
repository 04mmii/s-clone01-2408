import React from "react";
import ListCard from "./ListCard";
import accommodation from "../../data/data";
import { useNavigate } from "react-router-dom";
import "./List.css";

const List = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(`Navigating to /accommodation/${data.id}`); // 경로 확인
    navigate(`/accommodation/${data.id}`);
  };

  return (
    <div className="main-container">
      {/* <h1>숙소 목록</h1> */}
      <div className="card-list">
        {accommodation.map((item, index) => (
          <ListCard
            key={index}
            id={item.id}
            images={item.images}
            title={item.title}
            location={item.location}
            price={item.price}
            date={item.dates}
            rating={item.rating}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
