import React, { useState } from "react";
import "./ImageGallery.css";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (!images || images.length === 0) {
    return <div>이미지를 불러올 수 없습니다.</div>;
  }
  // 전체 사진 보기 모드
  if (showAllPhotos) {
    return (
      <div className="all-photos-container">
        <button
          className="close-button"
          onClick={() => setShowAllPhotos(false)}
        >
          ← 뒤로가기
        </button>
        <div className="all-photos-grid">
          {images.map((image, index) => (
            <div key={index} className="photo-wrapper">
              <img
                src={image}
                alt={`숙소 이미지 ${index + 1}`}
                onClick={() => {
                  setSelectedImage(index);
                  setShowAllPhotos(false);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="detail-image-grid">
      <div className="main-image-wrapper">
        <div className="main-image-container">
          <img
            src={images[selectedImage]}
            alt="메인 이미지"
            className="main-image"
            onClick={() => setShowAllPhotos(true)}
          />
          {images.length > 1 && (
            <>
              <button
                className="nav-button left"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => Math.max(0, prev - 1));
                }}
                disabled={selectedImage === 0}
              >
                ◀
              </button>
              <button
                className="nav-button right"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) =>
                    Math.min(images.length - 1, prev + 1)
                  );
                }}
                disabled={selectedImage === images.length - 1}
              >
                ▶
              </button>
              <div className="image-counter">
                {selectedImage + 1} / {images.length}
              </div>
            </>
          )}
        </div>
        {images.length > 1 && (
          <div className="thumbnail-grid">
            {images.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${
                  selectedImage === index ? "active" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`썸네일 ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        className="show-all-photos"
        onClick={() => setShowAllPhotos(true)}
      >
        모든 사진 보기
      </button>
    </div>
  );
};

export default ImageGallery;
