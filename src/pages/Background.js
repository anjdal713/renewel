import React from 'react';
import './Background.css';
import LayoutCards from './LayoutCards';
import CardList from './ExpandCard';

function Background() {

    return (
        <>
        <div className="background-container">
            <div className="centered-content">
                <h1>DIVISION OF COMPUTER ENGINEERING</h1>
            </div>
        </div>
        <div className="background-container2">
            <CardList />
        </div>

        <div className="background-container3">
            <LayoutCards/>
        </div>
        </>
    );
}

export default Background;