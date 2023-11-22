import React from 'react';

export const containerData = [
    { ctext: "전공선택", cimage: "/hsbugi.png" },
    { ctext: "전공필수", cimage: "/hsbugi3.png" },
    { ctext: "전공기초", cimage: "/hsbugi4.png" },
    { ctext: "자율교양", cimage: "/hsbugi7.png" },
    { ctext: "IPP", cimage: "/hsbugi6.png" },
];

const RoadmapContainer = ({ children }) => {
    return (
        <div style={{
                position: 'relative',
                width: '1000px',
                height: '100%',
                border: '2px solid #000',
            }}>
            {children}
        </div>
    );
};

export default RoadmapContainer;