import React from "react";
import ListCard from "./ListCard";
import { useNavigate } from "react-router-dom";
import "./List.css";

const List = ({ accommodations, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/accommodation/${id}`);
  };

  return (
    <div className="main-container">
      <div className="card-list">
        {accommodations.map((item, id) => (
          <ListCard
            key={id}
            id={item.id}
            images={item.images}
            title={item.title}
            location={item.location}
            price={item.price}
            date={item.dates}
            rating={item.rating}
            onClick={() => handleClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
