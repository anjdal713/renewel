// 컴포넌트 파일 (예: MainPage.js)

import React, { useState, useEffect } from "react";
import styled from "styled-components";
//import data from "./App";
import Home from "../pages/Home/Home";
import activity1 from '../img/activity1.jpg';
import activity2 from '../img/activity2.jpg';
import activity3 from '../img/activity3.jpg';
import activity4 from '../img/activity4.jpg';
import { useSpring, animated } from 'react-spring';
import AOS from "aos";
import "aos/dist/aos.css";
import './faculty_introduction/Introduction.css'
import head from '../img/main-background2.jpg';

const PageHeader = styled.div`
  height: 250px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ContentContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: transparent;
  color: gray;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: text-decoration 0.3s ease; /* transition 추가: 부드러운 변화 효과를 주기 위해 */

  &:hover {
    text-decoration: underline;
    text-underline-offset : 10px;
    color:black;
    transition:0.7s;
  }

  &:focus,
  &:active {
    outline: none; /* 클릭 시 파란 테두리 제거 */
    text-decoration: underline;
    text-underline-offset : 10px;
    color:black;
  }
`;




const StudentActivity = ({ data, hoveredId, onHover }) => {
  useEffect(() => {
    AOS.init();
  })
  
  const [selectedButton, setSelectedButton] = useState("캡스톤 디자인");

  const handleButtonClick = (category) => {
    setSelectedButton(category);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const leftImageProps = useSpring({
    opacity: scrollPosition > 300 ? 1 : 0, // 스크롤 위치에 따라 조절
    transform: `translateX(${scrollPosition > 300 ? 0 : -100}px)`, // 스크롤 위치에 따라 조절
  });

  const rightImageProps = useSpring({
    opacity: scrollPosition > 700 ? 1 : 0,
    transform: `translateX(${scrollPosition > 700 ? 0 : 100}px)`,
  });

  const leftImageProps2 = useSpring({
    opacity: scrollPosition > 1300 ? 1 : 0, // 스크롤 위치에 따라 조절
    transform: `translateX(${scrollPosition > 1300 ? 0 : -100}px)`, // 스크롤 위치에 따라 조절
  });

  const rightImageProps2 = useSpring({
    opacity: scrollPosition > 1900 ? 1 : 0,
    transform: `translateX(${scrollPosition > 1900 ? 0 : 100}px)`,
  });

  return (
    <>
      <div className="head-image">
            <img className="headImage" alt="Head" src={head}/>
        </div>
        <br/><br/><br/>
        <div className="head"
                data-aos="fade-up"
                data-aos-duration="1500">
                <h1 align="center">학생 활동</h1>
                <br/>
                <hr class="custom-hr"/>
                <br/>
        </div>
        <br/>
      <div data-aos="fade-up"
          data-aos-duration="1500">
      <ButtonContainer>
        {/* <Button onClick={() => handleButtonClick("전체")}>전체</Button> */}
        <Button onClick={() => handleButtonClick("캡스톤 디자인")} defaultChecked>캡스톤 디자인</Button>
        <Button onClick={() => handleButtonClick("경진대회")}>경진대회</Button>
        <Button onClick={() => handleButtonClick("프로그래밍 캠프")}>프로그래밍 캠프</Button>
      </ButtonContainer>
      <ContentContainer>
        {/* {selectedButton === "전체" && (
          <div>
            전체 내용을 여기에 표시
            {data.map((item) => (
              <div key={item.id}>{item.title}</div>
            ))}
          </div>
        )} */}
        {selectedButton === "캡스톤 디자인" && (
          <div>
            컴퓨터 공학부 커리큘럼을 기초로 프로토타입이 아닌 완성된 작품을 팀별로 한 학기 동안 구현하고 발표하는 과목으로서 협업을 통한 프로젝트 수행 기술을 습득한다. 
            <Home boxData={data} hoveredId={hoveredId}onHover={onHover}/>

          </div>
        )}
        {selectedButton === "경진대회" && (
        <div>
          <div style={{ margin: '0 40px 50px 40px' }}>
          <br></br><br></br>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <animated.img src={activity1} alt="한성공학경진대회 이미지" style={{ maxWidth: '100%', marginRight: '20px', marginLeft: '20px',...leftImageProps,}} />
            <div>

            <h3>대회명 한성공학경진대회</h3><br></br>
              <div style={{ lineHeight: '1.8' }}>
              <p>윤리적 책임의식과 문제해결의 실용능력을 갖춘 공학도를 양성하기 위하여 각 학과별로 전공 교육과정을 구성하여 운영하고 있으며, 전공이 강한 공학도를 배출하기 위해서 학술 소모임이나 창업 동아리 활동을 장려하고 지원하고 있습니다. 각 학과별로 학술 소모임이나 설계과목 등의 수업시간을 통해, 일년동안 갈고 닦은 전공 관련 논문과 작품 결과물들을 준비하여 전시하기 위해서 개최합니다.</p>
              <p><b>개최시기</b> 매년 9월 </p>
              <p><b>주관 기관</b> <a href="https://www.hansung.ac.kr/cse/9316/subview.do" target="_blank">한성대 홈페이지 한성공학경진대회</a></p>
              </div>

            </div>
          </div>
          </div>
          <br></br><br></br><br></br>
          <div style={{ margin: '0 40px 50px 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}>
            <animated.img src={activity2} alt="공개 SW 개발자 대회 이미지" style={{ width: '615px', height: '346px', marginLeft: '20px', marginRight: '20px',borderRadius: '20px',...rightImageProps,}} />
            <div>
              <h3>대회명 공개 SW 개발자 대회</h3><br></br>
              <div style={{ lineHeight: '1.8' }}>
              <p>SW 서비스 분야의 창의적이고 참신한 아이디어를 발굴하여 타당성 검증, 사업화 지원드을 통해 신 SW 서비스 시장을 창출하는 목적이 있습니다.</p>
              <p><b>주최 기관</b> <a href="https://www.msit.go.kr/index.do" target="_blank">과학기술정보통신부</a></p>
              <p><b>참가 신청</b> 매년 5월</p>
              <p><b>수상 실적 학생부분</b></p>
              <p></p> 대상: ToTheMagic팀 (배진식, 김태완, 박성훈), 2014년
              <p>학생부분 대상: Sprout팀 (이상훈, 권희정, 박도연), 2017년</p>
              <p>학생부분 금상: Who Dares팀 (홍성문, 안형우, 유호진, 손다미), 2018년</p>
              <p>학생부분 금상: 황금오리팀 (손지혜, 변민정, 김시훈, 이도연, 박혜진, 이태윤), 2019년</p>
              </div>

            </div>
          </div>
          </div>
          <br></br><br></br><br></br>
          <div style={{ margin: '0 40px 50px 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <animated.img src={activity3} alt="한성공학경진대회 이미지" style={{ width: '615px', height: '346px', marginLeft: '20px', marginRight: '20px',borderRadius: '20px',...leftImageProps2,}} />
            <div>

              <h3>대회명	임베디드 소프트웨어 경진대회</h3><br></br>
              <div style={{ lineHeight: '1.8' }}>
              <p>창의적이고 혁신적인 임베디드 소프트웨어 개발 아이디어 획득 임베디드 소프트웨어와 산업 간의 협업 아이디어 제공, 임베디드 소프트웨어 분야 우수 인력 발굴 및 양성, 임베디드 소프트웨어에 대한 범국민적 인식 제고 및 Global 저변 확대를 목표로 합니다.</p>
              <p><b>주최 기관</b>	산업통상자원부</p>
              <p><b>계획서 접수</b>	매년6월</p>
              <p><b>홈페이지</b> <a href="https://www.eswcontest.or.kr/main.php" target="_blank">임베디드 소프트웨어 경진대회</a></p>
              <p><b>수상 실적</b></p>
              <p>우수상: Casper팀 (최지훈, 심영보, 권영재, 유민석), 2016년</p>
              <p>우수상: HIFLY팀 (김준희, 김지나, 김형민, 최용석), 2017년</p>
              <p>우수상: 황도복숭아팀 (박혜진, 이태윤, 김서율, 김지수), 2018년</p>
              </div>

            </div>
          </div>
          </div>
          <br></br><br></br><br></br>
          <div style={{ margin: '0 40px 50px 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}>
            <animated.img src={activity4} alt="공개 SW 개발자 대회 이미지" style={{ width: '615px', height: '346px', marginLeft: '20px', marginRight: '20px',borderRadius: '20px',...rightImageProps2,}} />
            <div>
              <h3>대회명	ACM 프로그래밍 경진대회</h3><br></br>
              <div style={{ lineHeight: '1.8' }}>
              <p>대학생 3명으로 구성된 각 팀 들은 제한시간동안 얼마나 많은 문제를 풀 수 있는가를 놓고 경쟁하게 됩니다. 1976년부터 시작되어 올해로 41회째를 맞고 있는 이 대회의 각 지역대회에서 우수한 성적을 거둔 팀들은 내년 5월경 미국 래피드시티에서 개최될 세계 대회에 초대되게 됩니다.</p>
              <p><b>주최 기관</b> ACM</p>
              <p><b>등록</b>	매년 8월</p>
              <p><b>홈페이지</b>	<a href="http://icpckorea.org/" target="_blank">ACM 프로그래밍 경진대회</a></p>
              </div>
            </div>
          </div>
          </div>
          <br></br>
        </div>
      )}
        {selectedButton === "프로그래밍 캠프" && (
          <div>
            <br></br><br></br>
            <iframe
              width="560"  // 원하는 너비
              height="315" // 원하는 높이
              src="https://www.youtube.com/embed/VEHmmo8Dqhw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe><br></br><br></br><br></br>
            <h2>행사개요</h2><br></br>
            <p>프로그래밍 캠프는 겨울방학을 이용하여 외부 교육 장소에서 4박 5일 합숙하면서 집중적으로 프로그래밍을 학습하는 활동입니다. </p>
            <p>학생들은 부족했던 프로그래밍 능력을 향상시킬 수 있고, 학부에 대한 자부심을 느낄 수 있는 자리가 될 것입니다. </p>
            <p>또한 학부 교수진이 직접 캠프에 참여하여 전공 교육뿐 아니라 학생들과 소중한 소통의 시간을 가지고 있습니다.</p>
            <br></br><br></br>
            <h2>프로그램 내용</h2><br></br>
            <p>C (Level 1 & Level 2), C++ (Level 1 & Level 2), Java, Mini Project Problems</p>
            <br></br><br></br>
            {/* <h2>2023 동계 프로그래밍 캠프</h2>
            <p>2023년 1월 9일 (월) ~ 2023년 1월 12일 (목), 오크밸리리조트
                학생 105명, 튜터 7명, 학부 교수 8명 참석</p> */}

          </div>
        )}
      </ContentContainer>
      </div>
    </>
  );
};

export default StudentActivity;