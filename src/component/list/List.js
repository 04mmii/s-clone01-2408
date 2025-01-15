import React from "react";
import ListCard from "./ListCard";
import { useNavigate } from "react-router-dom";
import "./List.css";

const List = ({ data, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/accommodation/${id}`);
  };

  return (
    <div className="card-item">
      <ListCard
        id={data.id}
        images={data.images}
        title={data.title}
        location={data.location}
        price={data.price}
        date={data.dates}
        rating={data.rating}
        onClick={() => handleClick(data.id)}
      />
    </div>
  );
};

export default List;
