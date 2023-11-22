import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { groupedMagnetInfo, magnetInfo } from './RoadmapMagnet';

export const blocksByColor = {
    // id 구분 - 1xx: 학부공통, 2xx: 트랙필수,
    // id 구분 - 3xx: 트랙기초, 4xx: 자율교양, 5xx: IPP, 6xx: UI 표현
    // blockColor 구분 - 학부공통: hotpink, 트랙필수: blue, 트랙기초: skyblue, 자율교양: green, IPP: purple

    hotpink: [
        {id: 101, text: '프로그래밍랩', blockColor: 'hotpink'},
        {id: 102, text: '확률과 통계', blockColor: 'hotpink'},
        {id: 103, text: '객체지향언어1', blockColor: 'hotpink'},
        {id: 104, text: '자료구조', blockColor: 'hotpink'},
        {id: 105, text: '프로그래밍\n언어론', blockColor: 'hotpink'},
        {id: 106, text: '컴퓨터구조', blockColor: 'hotpink'},
        {id: 107, text: '선형대수', blockColor: 'hotpink'},
        {id: 108, text: '객체지향언어2', blockColor: 'hotpink'},
        {id: 109, text: '알고리즘', blockColor: 'hotpink'},
        {id: 110, text: '데이터통신', blockColor: 'hotpink'},
        {id: 111, text: '오픈소스SW', blockColor: 'hotpink'},
        {id: 112, text: '운영체제', blockColor: 'hotpink'},
        {id: 113, text: '데이터베이스', blockColor: 'hotpink'},
        {id: 114, text: '소프트웨어공학', blockColor: 'hotpink'},
        {id: 115, text: '컴퓨터그래픽스', blockColor: 'hotpink'},
        {id: 116, text: '시스템\n프로그래밍', blockColor: 'hotpink'},
        {id: 117, text: '설계패턴', blockColor: 'hotpink'},
        {id: 118, text: '네트워크\n프로그래밍', blockColor: 'hotpink'},
        {id: 119, text: '컴퓨터비젼', blockColor: 'hotpink'},
        {id: 120, text: '정보보안', blockColor: 'hotpink'},
        {id: 121, text: '컴파일러', blockColor: 'hotpink'},
        {id: 122, text: '취창업세미나', blockColor: 'hotpink'},
        {id: 123, text: '융합캡스톤\n디자인', blockColor: 'hotpink'},
        {id: 124, text: '모바일시스템\n응용프로젝트', blockColor: 'hotpink'},
        {id: 125, text: '클라우드컴퓨팅', blockColor: 'hotpink'},
        {id: 126, text: '인공지능', blockColor: 'hotpink'},
        {id: 127, text: '게임프로그래밍', blockColor: 'hotpink'},
    ],

    blue: [
        // 모바일소프트웨어 트랙필수
        {id: 201, text: '모바일&스마트\n시스템', blockColor: 'blue'},
        {id: 202, text: '안드로이드\n프로그래밍', blockColor: 'blue'},
        {id: 203, text: '고급모바일\n프로그래밍', blockColor: 'blue'},
        {id: 204, text: 'iOS프로그래밍', blockColor: 'blue'},

        // 웹공학 트랙필수
        {id: 205, text: '웹프로그래밍', blockColor: 'blue'},
        {id: 206, text: '웹서버\n프로그래밍', blockColor: 'blue'},
        {id: 207, text: '웹프레임워크1', blockColor: 'blue'},
        {id: 208, text: '웹프레임워크2', blockColor: 'blue'},

        // 빅데이터 트랙필수
        {id: 209, text: '빅데이터기초', blockColor: 'blue'},
        {id: 210, text: '데이터마이닝', blockColor: 'blue'},
        {id: 211, text: '데이터베이스\n설계', blockColor: 'blue'},
        {id: 212, text: '빅데이터\n프로그래밍', blockColor: 'blue'},

        // 디지털콘텐츠&가상현실 트랙필수
        {id: 213, text: '게임그래픽\n애니메이션', blockColor: 'blue'},
        {id: 214, text: '영상처리', blockColor: 'blue'},
        {id: 215, text: '가상현실', blockColor: 'blue'},
        {id: 216, text: '디지털콘텐츠\n기획 및 제작', blockColor: 'blue'},

        // 캡스톤디자인
        {id: 217, text: '캡스톤디자인', blockColor: 'blue'},
    ],
    skyblue: [
        // id: 3xx 트랙기초
        {id: 301, text: '컴퓨터\n프로그래밍', blockColor: 'skyblue'},
        {id: 302, text: '웹프로그래밍\n기초', blockColor: 'skyblue'},
    ],

    green: [
        // id: 4xx 자율교양
        {id: 401, text: '멀티미디어와\n현대사회', blockColor: 'green'},
        {id: 402, text: '이산수학', blockColor: 'green'},
        {id: 403, text: '쇼핑몰 운영 및\n관리', blockColor: 'green'},
    ],

    purple: [
        // id: 5xx IPP
        {id: 501, text: 'SW설계 및\n테스트', blockColor: 'purple'},
        {id: 502, text: 'SW통합구현', blockColor: 'purple'},
        {id: 503, text: '사용자인터페이스와 서버구현', blockColor: 'purple'},
        {id: 504, text: '데이터베이스\n시스템구현', blockColor: 'purple'},
    ],

    gray: [
        {id: 601, text: '1학년', blockColor: 'gray'},
        {id: 602, text: '2학년', blockColor: 'gray'},
        {id: 603, text: '3학년', blockColor: 'gray'},
        {id: 604, text: '4학년', blockColor: 'gray'},
    ]
};

let basisCount = 0;
let basisCount2 = 0;
let essentialCount1 = 0;
let optionCount1 = 0;
let essentialCount2 = 0;
let optionCount2 = 0;
let essentialCount3 = 0;
let optionCount3 = 0;
let essentialCount4 = 0;
let optionCount4 = 0;
let optionCount5 = 0;

const RoadmapBlock = ({ position: initialPosition, text, blockColor, id, onCountUpdate }) => {

    const [position, setPosition] = useState(initialPosition);
    const [isStuck, setIsStuck] = useState(false);

    const checkPositionInContainer = (x, y, containerX, containerY, containerWidth, containerHeight) => {
        const maxX = containerX + containerWidth;
        const maxY = containerY + containerHeight + 300;

        return x >= containerX && x <= maxX && y >= containerY && y <= maxY;
    };

    const handleDrag = (e, ui) => {
        const { x, y } = ui;
        let deltaY = 0;
        let insideMagnet = false;

        const currentMagnetInfo = getMagnetInfoForId(id);
        if (!currentMagnetInfo) return;

        const lastTwoDigits = id % 100;
        const adjustedMagnetInfo = adjustMagnetInfoPosition(currentMagnetInfo, lastTwoDigits);

        adjustedMagnetInfo.forEach((container) => {
            const { x: containerX, y: containerY, width: containerWidth, height: containerHeight, magnetId } = container;
            const inContainer = checkPositionInContainer(x, y, containerX, containerY, containerWidth, containerHeight);

            if (inContainer) {
                insideMagnet = true;
                setIsStuck(true);

                const updatedMagnetInfo = magnetInfo.find(info => info.magnetId === magnetId);
                if (updatedMagnetInfo) {
                    const originalBlockCnt = updatedMagnetInfo.blockCnt;
                    updatedMagnetInfo.blockCnt += 1;


                    // magnetInfo 업데이트
                    const updatedMagnetInfoIndex = magnetInfo.findIndex(info => info.magnetId === magnetId);
                    if (updatedMagnetInfoIndex !== -1) {
                        magnetInfo[updatedMagnetInfoIndex].blockCnt += 1;

                        // blockCnt가 증가할 때마다 y값 조정
                        if (updatedMagnetInfo.blockCnt > originalBlockCnt) {
                            deltaY = updatedMagnetInfo.blockCnt * 21;
                            magnetInfo[updatedMagnetInfoIndex].y += deltaY;
                            setPosition({
                                x: containerX + containerWidth / 2,
                                y: containerY + containerHeight / 2 + deltaY, // 위치 변경
                            });


                            // 동기화를 위해 adjustedMagnetInfo에서도 값을 업데이트
                            const adjustedMagnetInfoIndex = adjustedMagnetInfo.findIndex(info => info.magnetId === magnetId);
                            if (adjustedMagnetInfoIndex !== -1) {
                                adjustedMagnetInfo[adjustedMagnetInfoIndex].y -= deltaY;
                            }
                        }
                    }
                }
                // block 종류별로 count 증가
                switch (true) {
                    case id >= 101 && id <= 199:
                        optionCount5 += 1;
                        onCountUpdate(essentialCount1, essentialCount2, essentialCount3, essentialCount4, basisCount,
                            basisCount2, optionCount1, optionCount2, optionCount3, optionCount4, optionCount5);
                        break;
                    case id >= 201 && id <= 204:
                        essentialCount1 += 1;
                        optionCount1 += 1;
                        onCountUpdate(essentialCount1, essentialCount2, essentialCount3, essentialCount4, basisCount,
                            basisCount2, optionCount1, optionCount2, optionCount3, optionCount4, optionCount5);
                        break;
                    case id >= 205 && id <= 208:
                        essentialCount2 += 1;
                        optionCount2 += 1;
                        onCountUpdate(essentialCount1, essentialCount2, essentialCount3, essentialCount4, basisCount,
                            basisCount2, optionCount1, optionCount2, optionCount3, optionCount4, optionCount5);
                        break;
                    case id >= 209 && id <= 212:
                        essentialCount3 += 1;
                        optionCount3 += 1;
                        onCountUpdate(essentialCount1, essentialCount2, essentialCount3, essentialCount4, basisCount,
                            basisCount2, optionCount1, optionCount2, optionCount3, optionCount4, optionCount5);
                        break;
                    case id >= 213 && id <= 216:
                        essentialCount4 += 1;
                        optionCount4 += 1;
                        onCountUpdate(essentialCount1, essentialCount2, essentialCount3, essentialCount4, basisCount,
                            basisCount2, optionCount1, optionCount2, optionCount3, optionCount4, optionCount5);
                        break;
                    case id === 217:
                        essentialCount1 += 1;
                        optionCount1 += 1;
                        essentialCount2 += 1;
                        optionCount2 += 1;
                        essentialCount3 += 1;
                        optionCount3 += 1;
                        essentialCount4 += 1;
                        optionCount4 += 1;
                        onCountUpdate(essentialCount1, essentialCount2, essentialCount3, essentialCount4, basisCount,
                            basisCount2, optionCount1, optionCount2, optionCount3, optionCount4, optionCount5);
                        break;
                    case id === 301:
                        basisCount += 1;
                        onCountUpdate(essentialCount1, essentialCount2, essentialCount3, essentialCount4, basisCount,
                            basisCount2, optionCount1, optionCount2, optionCount3, optionCount4, optionCount5);
                        break;
                    case id === 302:
                        basisCount2 += 1;
                        onCountUpdate(essentialCount1, essentialCount2, essentialCount3, essentialCount4, basisCount,
                            basisCount2, optionCount1, optionCount2, optionCount3, optionCount4, optionCount5);
                        break;
                    default:
                        break;
                }
            }
        });

        if (!insideMagnet) {
            setIsStuck(false);
            setPosition({ x, y });
        }
    };

    const getMagnetInfoForId = (id) => {
        if (id >= 101 && id <= 199) {
            return groupedMagnetInfo.id1;
        } else if ((id >= 201 && id <= 299) || id === 999) {
            return groupedMagnetInfo.id2;
        } else if (id >= 301 && id <= 399) {
            return groupedMagnetInfo.id3;
        } else if (id >= 401 && id <= 499) {
            return groupedMagnetInfo.id4;
        } else if (id >= 501 && id <= 599) {
            return groupedMagnetInfo.id5;
        }
        return null;
    };

    const adjustMagnetInfoPosition = (magnetInfo, lastTwoDigits) => {
        if (lastTwoDigits >= 1) {
            const subtractY = Math.floor(lastTwoDigits * 40);
            return magnetInfo.map((container) => ({
                ...container,
                y: container.y - subtractY,
            }));
        }
        return magnetInfo;
    };

    const refactorFontSize = (text) => {
        const reduceLength = 7;
        const moreReduceLength = 9;
        const defaultFontSize = 14;
        const reductionFactor = 0.2;
        const moreReductionFactor = 0.4;

        if (text.length > moreReduceLength) {
            return `${defaultFontSize - (text.length - reduceLength) * moreReductionFactor}px`;
        } else if (text.length > reduceLength) {
            return `${defaultFontSize - (text.length - reduceLength) * reductionFactor}px`;
        }
        else
            return `${defaultFontSize}px`;
    };

    const blockStyle = {
        width: '100px',
        height: '40px',
        border: '1px solid #000',
        backgroundColor: blockColor,
        color: 'white', // text color
        fontSize: refactorFontSize(text),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const formattedText = text.split('\n').map((item, key) => {
        return (
            <React.Fragment key={key}>
                {item}
                <br />
            </React.Fragment>
        );
    });

    return (
        <Draggable position={position} onStop={handleDrag}>
            <div style={blockStyle}>
                <p style={{ margin: 0 }}>{formattedText}</p>
            </div>
        </Draggable>
    );
};

export default RoadmapBlock;