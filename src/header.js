// Header.js

import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import logo from './img/HSU-logo.png';
import logo2 from './img/HSU-logo2.png';
import './header.css';

function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header-container ${scrolling ? 'scrolled' : ''}`}>
      <header>
        <div className="header-content">
          
          <Nav className="justify-content-end" activeKey="/home">
          {/* <div className="header-logo">
            <img src={logo} className='App-logo' alt='React' />
          </div> */}
          <div className="header-logo">
            <img src={scrolling ? logo2 : logo} className='App-logo' alt='React' /> {/* 변경된 부분 */}
          </div>
            <Nav.Item>
              <Nav.Link href="/introduction" className="white-text">학부소개</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/members" className="white-text">구성원</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/program" className="white-text">학사 과정</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/activity" className="white-text">학생 활동</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/news" className="white-text">새 소식</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/roadmap" className="white-text">로드맵</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
