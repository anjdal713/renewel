import styled from "styled-components";
import px2vw from "../../components/studentActivity/px2vw";

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  padding-top: ${px2vw(40)};
  font-size: 2rem;
  text-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;
  flex-wrap: wrap;
  gap: ${px2vw(20)};

  @media (min-width: 768px) {
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const BoxContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; /* 흰색 박스를 부모 Box의 크기에 맞추기 */
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4); /* 흰색 박스의 색상 및 투명도 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2; /* 이미지 위에 위치하도록 z-index 설정 */
  transition: background-color 0.5s ease;
`;

export const BoxTitle = styled.h3`
  color: black;
  font-weight: bold;
  font-size: 2.5rem;
  transition: color 0.5s ease;

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;

export const BoxText = styled.p`
  color: black;
  font-size: 1.5rem;
  padding: ${px2vw(20)};
  transition: color 0.5s ease;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;


export const Box = styled.div`
  position: relative;
  display: flex;
  width: ${px2vw(200)};
  min-height: ${px2vw(150)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(10)};
  height: 100%;
  background-image: url(${(props) => props.image || "default-image-url"});
  background-size: cover;
  background-position: center;
  border: 1px solid #ddd;
  border-radius: 20px;
  overflow: hidden;
  transition: filter 0.5s ease;

  @media (min-width: 768px) {
    width: ${px2vw(200, 768)};
    min-height: ${px2vw(150, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(304)};
    min-height: ${px2vw(304)};
    height: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    transition: background-color 0.5s ease;
    z-index: 1; /* 이미지 위에 위치하도록 z-index 설정 */
  }

  &:hover::before {
    background-color: rgba(255, 255, 255, 0);
  }

  &:hover {
    filter: brightness(100%);
  }

  &:hover ${BoxContent} {
    opacity: 0;
  }

  &:hover ${BoxTitle},
  &:hover ${BoxText} {
    color: transparent;
  }
`;