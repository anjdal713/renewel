// Home.js

import React from "react";
import * as S from "./HomeStyles";
//import capstoneImage from '../../img/2022_capstone.png';
import { Link } from "react-router-dom";

const data = [
  {
    id: 2023,
    title: "2023 캡스톤 디자인",
    text: "2023 캡스톤 디자인 자료를 보려면 클릭하세요",
    image: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201809/27/929599f6-7876-48e8-b5f2-1f404f98e31c.jpg",
    link: "http://cse.hansung.ac.kr/resources/attachedFiles/2023%20%EC%BB%B4%ED%93%A8%ED%84%B0%EA%B3%B5%ED%95%99%EB%B6%80%20%EC%BA%A1%EC%8A%A4%ED%86%A4%EB%94%94%EC%9E%90%EC%9D%B8%20%EB%B0%9C%ED%91%9C%ED%9A%8C%20%ED%8C%9C%ED%94%8C%EB%A0%9B.pdf",
  },
  {
    id: 2022,
    title: "2022 캡스톤 디자인",
    text: "2022 캡스톤 디자인 자료를 보려면 클릭하세요",
    image: "https://image.chosun.com/sitedata/image/201810/02/2018100202087_0.jpg",
    link:"http://cse.hansung.ac.kr/resources/attachedFiles/2022%20%EC%BB%B4%ED%93%A8%ED%84%B0%EA%B3%B5%ED%95%99%EB%B6%80%20%EC%BA%A1%EC%8A%A4%ED%86%A4%EB%94%94%EC%9E%90%EC%9D%B8%20%EB%B0%9C%ED%91%9C%ED%9A%8C%20%ED%8C%9C%ED%94%8C%EB%A0%9B.pdf"
  },
  {
    id: 2021,
    title: "2021 캡스톤 디자인",
    text: "2021 캡스톤 디자인 자료를 보려면 클릭하세요",
    image: "https://thumb.mt.co.kr/06/2018/09/2018092117427439135_2.jpg/dims/optimize/",
  },
  {
    id: 2020,
    title: "2020 캡스톤 디자인",
    text: "2020 캡스톤 디자인 자료를 보려면 클릭하세요",
    image: "http://cse.hansung.ac.kr/resources/images/carousel3.jpg",
  },
  {
    id: 2019,
    title: "2019 캡스톤 디자인",
    text: "2019 캡스톤 디자인 자료를 보려면 클릭하세요",
    image: "http://cse.hansung.ac.kr/resources/images/carousel7.jpg",
  },
  {
    id: 2018,
    title: "2018 캡스톤 디자인",
    text: "2018 캡스톤 디자인 자료를 보려면 클릭하세요",
    image: "http://cse.hansung.ac.kr/resources/images/carousel4.jpg",
  },
  {
    id: 2017,
    title: "2017 캡스톤 디자인",
    text: "2017 캡스톤 디자인 자료를 보려면 클릭하세요",
    image: "https://i.ytimg.com/vi/oiKWEgcwegI/maxresdefault.jpg",
  },
  {
    id: 2016,
    title: "2016 캡스톤 디자인",
    text: "2016 캡스톤 디자인 자료를 보려면 클릭하세요",
    image: "https://dhnews.co.kr/news/data/20221214/p1065589023232087_659_thum.jpg",
  },
];

export default function Home({ hoveredId, onHover }) {
  return (
    <>
      <S.Container>
        {data.map((box) => (
          <a key={box.id} href={box.link} target="_blank" rel="noopener noreferrer">
            <S.Box
              image={box.image}
              hoverImage={box.hoverImage}
              onMouseEnter={() => onHover(box.id)}
              onMouseLeave={() => onHover(null)}
              hovered={hoveredId === box.id}
            >
              <S.BoxContent>
                <S.BoxTitle>{box.title}</S.BoxTitle>
                <S.BoxText>{box.text}</S.BoxText>
              </S.BoxContent>
            </S.Box>
          </a>
        ))}
      </S.Container>
    </>
  );
}