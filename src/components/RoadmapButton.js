import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import Modal from 'react-modal';

export const HelpButton = () => {
    const [showModal, setShowModal] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div>
            <div
                onClick={toggleModal}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    display: 'inline-block',
                    padding: '10px',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    boxShadow: isHovered ? '0 6px 12px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
            >
                <AiOutlineQuestionCircle style={{ fontSize: '64px', color: 'black' }} />
            </div>

            <Modal
                isOpen={showModal}
                onRequestClose={toggleModal}
                contentLabel="도움말 모달"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        zIndex: 9999,
                    },
                    content: {
                        width: '400px',
                        height: '400px',
                        border: 'none',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    },
                }}
            >
                <div>
                    <h2>사용 방법</h2>
                    <p>- 1920x1080, 16:9 해상도를 권장합니다.</p>
                    <p>- '제1트랙 선택', '제2트랙 선택' 버튼을 클릭하여 트랙을 선택해주세요.</p>
                    <p>- 아래쪽의 '전공선택', '전공필수', '전공기초', 'IPP '블럭을 드래그해서 배치하면, 오른쪽 위의 학점이 증가합니다.</p>
                    <p>- '초기화' 버튼을 클릭하면 블럭이 초기 상태로 되돌아갑니다.</p>
                    <p>- '캡쳐' 버튼을 클릭하면 현재 화면을 저장할 수 있습니다.</p>
                    <p>- 참고용으로만 사용해주세요.</p>
                    <button onClick={toggleModal}>닫기</button>
                </div>
            </Modal>
        </div>
    );
};

export const ResetButton = ({ onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const resetButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        border: '1px solid #000',
        cursor: 'pointer',
        fontSize: '16px',
        color: 'black',
        textDecoration: 'none',
        width: '120px',
        padding: '10px 20px',
        borderRadius: '5px',
        transition: 'transform 0.05s ease-in-out, box-shadow 0.05s ease-in-out', // 애니메이션 효과
        backgroundColor: 'white',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isHovered ? '0px 6px 8px rgba(0, 0, 0, 0.2)' : '0px 4px 6px rgba(0, 0, 0, 0.1)',
    };
    return (
        <button
            style={resetButtonStyle}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            초기화
        </button>
    );
};


export const CaptureButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [fileName] = useState('screenshot');

    const captureButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        border: '1px solid #000',
        cursor: 'pointer',
        fontSize: '16px',
        color: 'black',
        textDecoration: 'none',
        width: '80px',
        padding: '10px 20px',
        borderRadius: '5px',
        transition: 'transform 0.05s ease-in-out, box-shadow 0.05s ease-in-out', // 애니메이션 효과
        backgroundColor: 'white',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isHovered ? '0px 6px 8px rgba(0, 0, 0, 0.2)' : '0px 4px 6px rgba(0, 0, 0, 0.1)',
    };

    const captureScreen = () => {

        html2canvas(document.body).then((canvas) => {
            canvas.toBlob((blob) => {
                saveAs(blob, `${fileName}.png`);
            });
        });
    };

    return (
        <button
            style={captureButtonStyle}
            onClick={captureScreen}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            캡쳐
        </button>
    );
};


const RoadmapButton = ({ options, buttonText }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div style={{ position: 'absolute', top: '5px', right: '5px', zIndex: '999' }}>
            <div
                onClick={toggleDropdown}
                style={{
                    width: '200px',
                    height: '30px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                    textAlign: 'left',
                    cursor: 'pointer',
                    position: 'relative',
                }}
            >
                {selectedOption || buttonText}
                <span
                    style={{
                        position: 'absolute',
                        top: '8px',
                        right: '10px',
                        width: 0,
                        height: 0,
                        borderLeft: '6px solid transparent',
                        borderRight: '6px solid transparent',
                        borderBottom: `6px solid ${isOpen ? '#000' : '#ccc'}`,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                    }}
                />
            </div>
            {isOpen && (
                <div
                    style={{
                        width: '200px',
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '3px',
                        position: 'absolute',
                        top: '30px',
                        right: '0',
                    }}
                >
                    {options.map((option, index) => (
                        <div
                            key={index}
                            style={{
                                width: '100%',
                                height: '30px',
                                lineHeight: '30px',
                                paddingLeft: '10px',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RoadmapButton;