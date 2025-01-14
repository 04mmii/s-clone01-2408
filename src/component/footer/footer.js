import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>에어비앤비 지원</h3>
          <Link to="/">에어비앤비 지원</Link>
          <Link to="/">도움말 센터</Link>
          <Link to="/">에어커버</Link>
          <Link to="/">차별 반대</Link>
          <Link to="/">장애인 지원</Link>
          <Link to="/">예약 취소 옵션</Link>
          <Link to="/">이웃 민원 신고</Link>
        </div>

        <div className="footer-section">
          <h3>호스팅</h3>
          <Link to="/">당신의 공간을 에어비앤비하세요</Link>
          <Link to="/">호스트를 위한 에어커버</Link>
          <Link to="/">호스팅 자료</Link>
          <Link to="/">커뮤니티 포럼</Link>
          <Link to="/">책임감 있는 호스팅</Link>
          <Link to="/">무료 호스팅 클래스 참여하기</Link>
          <Link to="/">공동 호스트 찾기</Link>
        </div>

        <div className="footer-section">
          <h3>에어비앤비</h3>
          <Link to="/">뉴스룸</Link>
          <Link to="/">새로운 기능</Link>
          <Link to="/">채용정보</Link>
          <Link to="/">투자자 정보</Link>
          <Link to="/">Airbnb.org 긴급 숙소</Link>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="copyright">
          © 2025 Airbnb, Inc. ·<Link to="/">개인정보 처리방침</Link> ·
          <Link to="/">쿠키 정책</Link> ·<Link to="/">이용약관</Link> ·
          <Link to="/">사이트맵</Link> ·
          <Link to="/">한국의 변경된 환불 정책</Link> ·
          <Link to="/">회사 세부정보</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
