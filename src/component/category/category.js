import React, { useRef } from "react";
import "./category.css";

const GridRow = () => {
  const categories = [
    { name: "국립공원", image: "/image/국립공원.jpeg" },
    { name: "료칸", image: "/image/료칸.jpeg" },
    { name: "그랜드 피아노", image: "/image/그랜드 피아노.jpeg" },
    { name: "마차", image: "/image/마차.jpeg" },
    { name: "돔하우스", image: "/image/돔하우스.jpeg" },
    { name: "복토 주택", image: "/image/복토 주택.jpeg" },
    { name: "사막", image: "/image/사막.jpeg" },
    { name: "북극", image: "/image/북극.jpeg" },
    { name: "상징적 도시", image: "/image/상징적 도시.jpeg" },
    { name: "서핑", image: "/image/서핑.jpeg" },
    { name: "스키", image: "/image/스키.jpeg" },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 200;
    } else {
      current.scrollLeft += 200;
    }
  };

  return (
    <div className="category-container">
      <button className="scroll-button left" onClick={() => scroll("left")}>
        &#9664;
      </button>

      <div className="category-grid" ref={scrollRef}>
        {categories.map((category, index) => (
          <div className="category-item" key={index}>
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>

      <button className="scroll-button right" onClick={() => scroll("right")}>
        &#9654;
      </button>
    </div>
  );
};

export default GridRow;
