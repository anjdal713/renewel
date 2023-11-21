import React, { useState, useEffect } from 'react';
import './Program.css';
import head from '../img/main-background2.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
import { Accordion } from './AccordionItem';
const Program = () => {
  useEffect(() => {
    AOS.init();
  })

  const [subjects, setSubjects] = useState({
    1: {
      1: ['컴퓨터 프로그래밍'],
      2: ['웹프로그래밍기초'],
    },
    2: {
      1: ['모바일&스마트 시스템'],
      2: ['빅데이터 기초', '웹프로그래밍', '게임그래픽 애니메이션'],
    },
    3: {
      1: ['안드로이드 프로그래밍', '데이터마이닝', '웹서버 프로그래밍', '영상처리'],
      2: ['고급 모바일 프로그래밍', '데이터베이스 설계', '웹프레임워크1', '가상현실'],
    },
    4: {
      1: ['iOS 프로그래밍', '빅데이터 프로그래밍', '웹프레임워크2', '디지털 콘텐츠 기획 및 제작'],
      2: [],
    },
  });

  const handleSubjectClick = (grade, semester, subject) => {
    console.log(`학년 ${grade}, ${semester}학기에서 선택된 과목: ${subject}`);
  };

  return (
    <>
    <div className="head-image">
            <img className="headImage" alt="Head" src={head}/>
        </div>
        <br/><br/><br/>
        <div className="head"
                data-aos="fade-up"
                data-aos-duration="1500">
                <h1 align="center">학사 과정</h1>
                <br/>
                <hr class="custom-hr"/>
                <br/>
        </div>
        <br/>
        <div className = "accordion-container">
          <Accordion/>
        </div>
    </>
  );
};

export default Program;
