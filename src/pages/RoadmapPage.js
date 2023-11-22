import React, { useState } from 'react';
import RoadmapBlock, { blocksByColor } from "../components/RoadmapBlock";
import RoadmapContainer, { containerData } from '../components/RoadmapContainer';
import RoadmapButton, { ResetButton, CaptureButton, HelpButton } from "../components/RoadmapButton";


const RoadmapPage = () => {
    let [essentialCount, setEssentialCount] = useState(0);
    let [basisCount, setBasisCount] = useState(0);
    let [optionCount, setOptionCount] = useState(0);
    let [essentialCount2, setEssentialCount2] = useState(-1);
    let [basisCount2, setBasisCount2] = useState(-1);
    let [optionCount2, setOptionCount2] = useState(-1);


    const grayBlocks = blocksByColor.gray;
    const initialBlocks = Object.values(blocksByColor).flat();

    const containerWidth = 200;
    const containerHeight = 250;
    const blockWidth = 100;
    const blockHeight = 40;
    const gapX = 7;
    const gapY = 7;

    const containerStyles = {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '450px',
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '5px',
        border: '2px solid black',
    };

    const MetricsBox = ({ text }) => {
        const boxStyle = {
            width: '200px',
            height: '45px',
            border: '1px solid #000',
            backgroundColor: 'transparent',
            textAlign: 'center',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        };

        return (
            <div style={{ ...boxStyle, marginBottom: '5px' }}>
                {text}
            </div>
        );
    };

    const [isOpenTrack1, setIsOpenTrack1] = useState(false);
    const [isOpenTrack2, setIsOpenTrack2] = useState(false);

    const handleCountUpdate = (essential, basis, option, block) => {
        const maxEssential = 5;
        const maxBasis = 1;
        const maxOption = 13;
        const adjustedEssential = Math.min(essential, maxEssential);
        const adjustedBasis = Math.min(basis, maxBasis);
        const adjustedOption = Math.min(option, maxOption);

        setEssentialCount(adjustedEssential);
        setBasisCount(adjustedBasis);
        setOptionCount(adjustedOption);

        if ((adjustedEssential >= maxEssential) && (block.id >= 201 && block.id <= 299 || block.id === 999)) {
            essentialCount2 += 1;
            if (essentialCount2 >= 5) essentialCount2 = 5;
        }

        if ((adjustedBasis >= maxBasis) && (block.id >= 301 && block.id <= 399)) {
            basisCount2 += 1;
            if (basisCount2 >= 1) basisCount2 = 1;
        }

        if (adjustedOption >= maxOption) {
            optionCount2 += 1;
            if (optionCount2 >= 13) optionCount2 = 13;
        }

        // essentialCount2, basisCount2, optionCount2 업데이트
        setEssentialCount2(essentialCount2);
        setBasisCount2(basisCount2);
        setOptionCount2(optionCount2);
    };

    // 컨테이너에 블록을 배치하는 함수
    const placeBlocksInContainer = (blocks, containerWidth, containerHeight, blockWidth, blockHeight, gapX, gapY) => {
        const blocksInContainer = [];
        let currentX = gapX;
        let currentY = gapY;
        let columnIndex = 0;

        for (let i = 0; i < blocks.length; i++) {
            blocksInContainer.push({
                ...blocks[i],
                position: {
                    x: currentX,
                    y: currentY,
                },
            });
            columnIndex++;
            if (columnIndex % 3 === 0) { // 3개 블록까지 한 열로 배치했으면 다음 열로 이동
                currentY += gapY; // Y 좌표 변경
                currentX = gapX; // X 좌표 초기화
                columnIndex = 0;
            } else {
                currentX += blockWidth + gapX;
                currentY -= 40;
            }
        }
        return blocksInContainer;
    };

    const placeGrayBlocks = () => {
        const blockStyle = {
            width: '207px',
            height: '40px',
            border: '1px solid #000',
            backgroundColor: 'gray',
            color: 'white',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        };

        return grayBlocks.map((block) => (
            <div key={block.id} style={{ ...blockStyle, margin: '5px auto' }}>
                {block.text}
            </div>
        ));
    };

    // 각 컨테이너에 블록 배치
    const containers = Object.keys(blocksByColor)
        .filter((color) => color !== 'gray')
        .map((color, index) => {
            const blocksForColor = blocksByColor[color];
            const blocksInContainer = placeBlocksInContainer(blocksForColor, containerWidth, containerHeight, blockWidth, blockHeight, gapX, gapY);
            const currentContainerData = containerData[index];

            const imageStyle = {
                position: 'absolute',
                top: '-60px',
                left: '6%',
                transform: 'translateX(-50%)',
                width: '65px',
                height: '65px',
            };

            const textStyle = {
                position: 'absolute',
                top: '-38px',
                right: '20px',
                left: `35%`,
                transform: 'translateX(-50%)',
                fontSize: '18px',
                marginLeft: '20px',
            };


            return (
                <RoadmapContainer key={color}>
                    <img src={`${currentContainerData.cimage}`} alt={`HS Bugi ${index}`} style={imageStyle} />
                    <div style={textStyle}>{currentContainerData.ctext}</div>
                    {blocksInContainer.map((block) => (
                        <RoadmapBlock
                            key={block.id}
                            id={block.id}
                            position={block.position}
                            text={block.text}
                            blockColor={block.blockColor}
                            onCountUpdate={(essential, basis, option) => handleCountUpdate(essential, basis, option, block)}
                            setPosition={(newPos) => handlePositionChange(block.id, newPos)}
                        />
                    ))}
                </RoadmapContainer>
            );
        });


    const [blocks, setBlocks] = useState(() =>
        placeBlocksInContainer(initialBlocks, containerWidth, containerHeight, blockWidth, blockHeight, gapX, gapY)

    );



    const handlePositionChange = (id, newPosition) => {
        const updatedBlocks = blocks.map((block) =>
            block.id === id ? {...block, position: newPosition} : block
        );
        setBlocks(updatedBlocks);
    };

    const resetState = () => {
        window.location.reload();
    };


    return (
        <div>
            <div style={{ width: '100px', height: '100px' }}>
                <img src={`${process.env.PUBLIC_URL}/hsbugi.png`} alt="HS Bugi" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={containerStyles}>
                {containers}
            </div>

            <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: '2999' }}>
                <RoadmapButton
                    isOpen={isOpenTrack1}
                    setIsOpen={setIsOpenTrack1}
                    options={['모바일소프트웨어', '웹공학', '빅데이터', '디지털콘텐츠&가상현실']}
                    buttonText="제1트랙 선택"
                />
            </div>

            <div style={{ position: 'absolute', top: '215px', right: '10px', zIndex: '999' }}>
                <RoadmapButton
                    isOpen={isOpenTrack2}
                    setIsOpen={setIsOpenTrack2}
                    options={['모바일소프트웨어', '웹공학', '빅데이터', '디지털콘텐츠&가상현실']}
                    buttonText="제2트랙 선택"
                />

                <div style={{ position: 'relative', marginTop: '-170px' }}>
                    <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-150%)', width: '1000px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                            {placeGrayBlocks()}
                        </div>
                    </div>
                </div>

                <div style={{ position: 'absolute', top: '-160px', right: '5px', zIndex: '-999' }}>
                    <MetricsBox text={`전공기초: ${basisCount * 3} / (3)`} />
                    <MetricsBox text={`전공필수: ${essentialCount * 3} / (15)`} />
                    <MetricsBox text={`전공소계(기초,필수,선택): ${optionCount * 3} / (39)`} />
                </div>

                <div style={{ position: 'absolute', top: '45px', right: '5px', zIndex: '-999' }}>
                    <MetricsBox text={`전공기초: ${Math.max(basisCount2 * 3, 0)} / (3)`} />
                    <MetricsBox text={`전공필수: ${Math.max(essentialCount2 * 3, 0)} / (15)`} />
                    <MetricsBox text={`전공소계(기초,필수,선택): ${Math.max(optionCount2 * 3, 0)} / (39)`} />
                </div>

                <div style={{ position: 'absolute', top: '200px', right: '88px', zIndex: '999' }}>
                    <ResetButton onClick={resetState} />
                </div>

                <div style={{ position: 'absolute', top: '200px', right: '5px', zIndex: '999' }}>
                    <CaptureButton />
                </div>

                <div style={{ position: 'absolute', top: '-200px', left: '-310px', zIndex: '999' }}>
                    <HelpButton />
                </div>


            </div>
        </div>
    );
};

export default RoadmapPage;