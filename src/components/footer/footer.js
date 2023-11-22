import React from 'react';
import './footer.css';

function Footer() {
  if (window.location.pathname === '/roadmap') return null;
  return (
    <footer className="footer-container">
      <div className="footer-line">
      <div className="footer-content">
        <div className="footer-section">
        <br></br><br></br>
          <p>02876</p>
          <p>서울특별시 성북구 삼선교로 16길(삼선동2가) 116 한성대학교</p>
          <p>대표 02-760-4114</p>
          <p>컴퓨터공학부 02-760-4127</p>
          <p>02-760-4438</p>
          <br></br><br></br>
          <p>© 2023 Hansung University, School of Computer Engineering</p><br></br>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;