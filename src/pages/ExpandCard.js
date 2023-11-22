import { useState } from 'react';
import { motion } from 'framer-motion';
import './ExpandCard.css';

const ExpandCard = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className={`card ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      style={{ borderRadius: '1rem' }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="card-top" layout="position">
        <div className="card-top__header">
          <h3><b>{title}</b></h3>
        </div>
      </motion.div>

      {isOpen && (
        <motion.div
          className="card-content"
          initial={{ clipPath: 'circle(0% at 0 0)' }}
          animate={{ clipPath: 'circle(140.9% at 0 0)' }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            type: 'spring',
            damping: 25,
            stiffness: 100,
          }}
        >
          <div className="content-text">
            <p>{content}</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const CardList = () => {
    const items = [
      {
        title: '전공심화트랙',
        content: '  산업체 수요를 바탕으로 특성화 트랙을 선정하여 전공 심화 교육을 실시한다 (모바일 소프트웨어, 웹 공학, 빅 데이터, 디지털 컨텐츠 및 가상 현실)',
      },
      {
        title: '프로젝트 지향 교육',
        content: '  산업체와 함께 프로젝트를 진행하여 현장 실무 능력과 융합적 사고력을 배양한다 (캡스톤 디자인, 경진 대회, 산학협력 프로젝트 )',
      },
      {
        title: '현장 실습 교육',
        content: '  국내외 인턴쉽 프로그램을 통해 현장 적응력을 배양하고 취·창업을 지원한다 (ICCEUSA 해외 인턴 사업, 취·창업 교육, IPP형 일학습 병행제)',
      },
    ];
  
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  
    const handleCardClick = (index) => {
      setSelectedCardIndex(index === selectedCardIndex ? null : index);
    };
  
    return (
      <div className="card-list">
        {items.map((item, index) => (
          <ExpandCard
            key={index}
            title={item.title}
            content={item.content}
            isOpen={index === selectedCardIndex}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    );
  };

export default CardList;