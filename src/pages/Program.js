import React, { useEffect } from 'react';
import './Program.css';
import head from '../img/main-background2.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
import { Accordion } from './AccordionItem';

const Program = () => {
  useEffect(() => {
    AOS.init();
  })
  
  return (
    <>
    <div className="head-image">
            <img className="headImage" alt="Head" src={head}/>
    </div>
    <br/><br/><br/>
    <div className="program-container"
        data-aos="fade-up"
        data-aos-duration="1500">
      <h1 align="center">학사 과정</h1>
      <br/>
      <hr className="custom-hr"/>
      <br/><br/><br/>
    </div>
    <div data-aos="fade-up"
          data-aos-duration="1500">
      <Accordion/>
    </div>
    </>
  );
};

export default Program;