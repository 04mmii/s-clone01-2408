import React from "react";
import "./AccommodationInfo.css";

const AccommodationInfo = ({ accommodation }) => {
  return (
    <div className="detail-layout">
      <div className="info-section">
        <div className="title-section">
          <h1>Matulji, 크로아티아의 공동 주택 전체</h1>
          <p className="sub-title">
            최대 인원 2명 · 원룸 · 침대 1개 · 욕실 1개
          </p>
        </div>

        <div className="rating-section">
          <div className="rating-box">
            <div className="trophy-rating">
              <span className="trophy">🏆</span>
              <div className="rating-text">
                <p>에어비앤비 게스트에게 가장 사랑받는 숙소</p>
                <div className="rating">
                  <span className="rating-n">4.96</span>
                  <span className="rating-c">
                    후기
                    <br />
                    139개
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="amenities-grid">
          <div className="amenity-item">
            <span className="amenity-icon">🚗</span>
            <p>해변 근처</p>
          </div>
          <div className="amenity-item">
            <span className="amenity-icon">📅</span>
            <p>3월 31일 전까지 무료 취소 가능</p>
          </div>
          <div className="amenity-item">
            <span className="amenity-icon">🔍</span>
            <p>여행 가방 보관 가능</p>
          </div>
          <div className="amenity-item">
            <span className="amenity-icon">🏠</span>
            <p>슈퍼호스트</p>
          </div>
          <div className="amenity-item">
            <span className="amenity-icon">🎨</span>
            <p>셀프 체크인</p>
          </div>
          <div className="amenity-item">
            <span className="amenity-icon">📺</span>
            <p>TV</p>
          </div>
        </div>

        <div className="host-section">
          <div className="host-profile">
            <img
              src="host-image.jpg"
              alt="호스트 프로필"
              className="host-image"
            />
            <div className="host-info">
              <h3>호스트: Suzana 님</h3>
              <p>슈퍼호스트 · 호스팅 경력 6년</p>
            </div>
          </div>
        </div>

        <div className="description-section">
          <p className="translated-notice">
            일부 정보는 자동 번역되었습니다.{" "}
            <button className="show-original">원문 보기</button>
          </p>

          <p className="description-text">
            2층에는 최대 4명까지 함께 사용하실 수 있습니다. 온수 욕조와 인피니티
            풀 30 m² 이상실 30/110cm, 선베드, 테라스 가구가 있는 옥상 테라스.
            수영장은 15.05까지 운영합니다.-30.09. 온수.
          </p>
          <p className="description-text">
            숙소 옆 부지에 주차 공간이 마련되어 있으며, 항상 무료로 이용할수
            있습니다. 전기 자동차 충전 가능(추가 비용).
          </p>
          <button className="show-more">더 보기 {">"}</button>
        </div>
      </div>
    </div>
  );
};

export default AccommodationInfo;
