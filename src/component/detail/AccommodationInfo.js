import React, { useState, useEffect } from "react";
import "./AccommodationInfo.css";

const AccommodationInfo = ({ accommodation }) => {
  const [showModal, setShowModal] = useState(false);
  const [truncatedDescription, setTruncatedDescription] = useState("");

  const fullDescription = `2층에는 최대 4명까지 함께 사용하실 수 있습니다. 
온수 욕조와 인피니티 풀 30 m² 이상실 30/110cm, 선베드, 테라스 가구가 있는 옥상 테라스,
수영장은 15.05까지 운영합니다.

뷰포인트 스튜디오는 2명이 편안하게 지낼 수 있는 새롭고 현대적으로 꾸며진 스튜디오 아파트입니다. 
가장 유명한 두브로브니크 해변인 반자에서 도보로 10분 거리에 있으며 구시가지에서 도보로 20분 거리에 있습니다. 
아름다운 바다와 구시가지의 테라스에서 휴식을 취하면 두브로브니크에서 잊을 수 없는 시간을 보내실 수 있습니다.

숙소
이 아름다운 스튜디오는 넓은 거실, 침실 1개, 시설이 완비된 주방, 욕실, 데크체어와 온수 욕조가 있는 넓은 테라스로 
'잊을 수 없는' 숙박을 특별하게 만들어주는 추가 요소로 구성되어 있습니다.
에어컨, 무료 와이파이, 모든 필수품이 완비된 주방을 포함한 편의시설이 이 스튜디오에서 더욱 특별한 시간을 보내실 수 있습니다.
두브로브니크에서 특별하고 잊을 수 없는 휴식을 취할 수 있도록 모든 세부 사항을 고려했습니다.`;

  useEffect(() => {
    if (fullDescription.length > 200) {
      setTruncatedDescription(fullDescription.slice(0, 199) + "...");
    } else {
      setTruncatedDescription(fullDescription);
    }
  }, [fullDescription]);

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
                <div className="D-rating">
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

          <p className="description-text">{truncatedDescription}</p>
          <button className="show-more" onClick={() => setShowModal(true)}>
            더 보기 {">"}
          </button>

          <div className="accommodation-photos">
            <h3>숙박 장소</h3>
            <div className="photo-item">
              <img src="/room-image.jpg" alt="거실 공간" />
              <div className="photo-info">
                <p className="room-type">거실 공간</p>
                <p className="bed-info">킹사이즈 침대 1개</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>숙소 설명</h2>
            <p className="full-description">{fullDescription}</p>
            <button onClick={() => setShowModal(false)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccommodationInfo;
