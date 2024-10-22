import React from 'react';
import './category.css'




const category = () => {

    const images = [
        '/image/국립공원.jpeg',
        '/image/료칸.jpeg',
        '/image/그랜드 피아노.jpeg',
        '/image/민수.jpeg',
        '/image/마차.jpeg',
        '/image/돔하우스.jpeg',
        '/image/리아드.jpeg',
        '/image/무장애.jpeg',
        '/image/복토 주택.jpeg',
        '/image/사막.jpeg',
        '/image/북극.jpeg',
        '/image/상징적 도시.jpeg',
        '/image/서핑.jpeg',
        '/image/스키.jpeg',
    ]
    return (
        <div className="grid-container">
        {images.map((image, index) => (
          <div className="grid-item" key={index}>
            <img src={image} alt={`Item ${index+1}`} />
          </div>
        ))}
      </div>
    );
};

export default category;