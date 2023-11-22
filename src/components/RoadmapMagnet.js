import React from 'react';
import { blocksByColor } from "./RoadmapBlock";

export const magnetInfo = [
    // id: 301 기준
    { magnetId: 1, blockCnt: 0, x: 472, y: -445, width: 100, height: 250 },
    { magnetId: 2, blockCnt: 0, x: 365, y: -445, width: 100, height: 250 },
    { magnetId: 3, blockCnt: 0, x: 216, y: -445, width: 100, height: 250 },
    { magnetId: 4, blockCnt: 0, x: 109, y: -445, width: 100, height: 250 },
    { magnetId: 5, blockCnt: 0, x: -40, y: -445, width: 100, height: 250 },
    { magnetId: 6, blockCnt: 0, x: -146, y: -445, width: 100, height: 250 },
    { magnetId: 7, blockCnt: 0, x: -295, y: -445, width: 100, height: 250 },
    { magnetId: 8, blockCnt: 0, x: -402, y: -445, width: 100, height: 250 },
];

const id1 = magnetInfo.map((item) => ({ ...item, x: item.x + 768 }));
const id2 = magnetInfo.map((item) => ({ ...item, x: item.x + 384 }));
const id3 = magnetInfo.map((item) => ({ ...item }));
const id4 = magnetInfo.map((item) => ({ ...item, x: item.x - 384 }));
const id5 = magnetInfo.map((item) => ({ ...item, x: item.x - 768 }));

export const groupedMagnetInfo = { id1, id2, id3, id4, id5 };

const RoadmapMagnet = ({ children }) => {

    const allBlockIds = Object.values(blocksByColor).reduce((acc, colorBlocks) => {
        return acc.concat(colorBlocks.map(block => block.id));
    }, []);
    console.log(allBlockIds);

    Object.values(blocksByColor).forEach(colorBlocks => {
        colorBlocks.forEach(block => {
            console.log(block.id);
        });
    });
};

export default RoadmapMagnet;