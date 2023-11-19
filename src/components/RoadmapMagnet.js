import React from 'react';
import { blocksByColor } from "./RoadmapBlock";

export const magnetInfo = [
    // id: 301 기준
    { x: 472, y: -445, width: 100, height: 250 },
    { x: 365, y: -445, width: 100, height: 250 },
    { x: 216, y: -445, width: 100, height: 250 },
    { x: 109, y: -445, width: 100, height: 250 },
    { x: -40, y: -445, width: 100, height: 250 },
    { x: -146, y: -445, width: 100, height: 250 },
    { x: -295, y: -445, width: 100, height: 250 },
    { x: -402, y: -445, width: 100, height: 250 },
];

const id1 = magnetInfo.map((item) => ({ ...item, x: item.x + 768 }));
const id2 = magnetInfo.map((item) => ({ ...item, x: item.x + 385 }));
const id3 = magnetInfo.map((item) => ({ ...item }));
const id4 = magnetInfo.map((item) => ({ ...item, x: item.x - 382 }));
const id5 = magnetInfo.map((item) => ({ ...item, x: item.x - 766 }));

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