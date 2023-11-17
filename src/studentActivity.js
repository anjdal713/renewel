// 컴포넌트 파일 (예: MainPage.js)

import React, { useState } from "react";
import styled from "styled-components";


const PageHeader = styled.div`
  height: 160px;
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
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #2980b9;
  }
`;

const studentActivity = () => {
  const [selectedButton, setSelectedButton] = useState("전체");

  const handleButtonClick = (category) => {
    setSelectedButton(category);
  };

  return (
    <>
      <PageHeader>
        <div>컴퓨터 공학부 학생활동에 대한 페이지입니다</div>
      </PageHeader>
      <ButtonContainer>
        <Button onClick={() => handleButtonClick("전체")}>전체</Button>
        <Button onClick={() => handleButtonClick("캡스톤 디자인")}>캡스톤 디자인</Button>
        <Button onClick={() => handleButtonClick("경진대회")}>경진대회</Button>
        <Button onClick={() => handleButtonClick("프로그래밍 캠프")}>프로그래밍 캠프</Button>
      </ButtonContainer>
      <ContentContainer>
        {selectedButton === "전체" && <div>전체 내용을 여기에 표시</div>}
        {selectedButton === "캡스톤 디자인" && <div>캡스톤 디자인 내용을 여기에 표시</div>}
        {selectedButton === "경진대회" && <div>경진대회 내용을 여기에 표시</div>}
        {selectedButton === "프로그래밍 캠프" && <div>프로그래밍 캠프 내용을 여기에 표시</div>}
      </ContentContainer>
    </>
  );
};

export default studentActivity;
