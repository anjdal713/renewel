import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LayoutCards.css';
import { IoClose } from "react-icons/io5";


const cards = [1, 2, 3, 4];
const items = [
    { id: 1, title: '모바일 소프트웨어', 
    subtitle: '안드로이드, iOS 플랫폼을 활용한 모바일 응용 소프트웨어 개발자를 양성한다. 또한 다양한 센서와 무선 네트워크를 이용하여 IoT 애플리케이션을 개발한다.'
    , professor: '이재문, 황기태, 정인환, 황호영, 허준영' },
    { id: 2, title: '웹 공학', 
    subtitle: '웹 프레임워크를 활용하여 front-end와 back-end 웹 개발자를 양성한다. 또한 클라우드 환경을 이해하고 웹 서비스를 구축 및 배포하는 지식을 습득한다.'
    , professor: '김진환, 정인상, 김성동, 김남윤, 박승현' },
    { id: 3, title: '빅 데이터', 
    subtitle: '빅 데이터 분석을 수행할 수 있는 데이터 사이언티스트 양성을 목표로 한다. 정형/비정형 데이터에 대한 수집, 모델링, 데이터 분석 전과정에 대한 전문지식을 습득한다.'
    , professor: '최병수, 엄종석, 김영웅, 권영미, 강희중, 장재영, 이석기' },
    { id: 4, title: '디지털 콘텐츠 및 가상현실', 
    subtitle: '디지털 영상처리, 디지털 콘텐츠 제작 및 활용 기술을 학습한다. 영상처리 및 컴퓨터 비전, 2D 이미지 및 3D 모델링, 게임, 가상현실 기술을 습득한다.'
    , professor: '조세홍, 이항찬, 계희원, 김진모, 이지은' },
  ];

const LayoutCards = () => {

  const [selectedId, setSelectedId] = useState(null);
  const containerRefs = useRef(new Array());

  const handleCardClick = (card) => {
    if (selectedId === card) {
      setSelectedId(null);
    } else {
      setSelectedId(card);
    }
  };

  return (
    <div className="layout-container">
        
      <div className="layout-cards">
        {cards.map((card, i) => (
          <motion.div
            className={selectedId === card ? 'opened-card' : 'card'}
            key={i}
            layout
            whileTap={{ scale: 1.1 }}
            onClick={() => handleCardClick(card)}
            initial={false}
            animate={{ scale: selectedId === card ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            ref={(el) => (containerRefs.current[card] = el)}
          >
            {selectedId === card && (
              <div>
                <h3 className="h3-custom">{items.find((item) => item.id === selectedId).title}</h3>
                <p className="p-custom">{items.find((item) => item.id === selectedId).subtitle}</p>
                <p className="p-custom">교수: {items.find((item) => item.id === selectedId).professor}</p>
                <button
                  className="close-button"
                  onClick={() => setSelectedId(null)}
                >
                  <IoClose />
                </button>
              </div>
            )}
          </motion.div>
        ))}
        <motion.div className="dim-layer" animate={{ opacity: selectedId ? 0.3 : 0 }} />

        <AnimatePresence>
          {selectedId && (
            <motion.div
              key="modal"
              layoutId={selectedId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LayoutCards;