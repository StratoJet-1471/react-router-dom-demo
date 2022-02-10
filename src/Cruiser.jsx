import React from 'react';

import './css/style.css';

export function Cruiser() {
    return (
        <div className="ship">
            <div className="ship__title">
                <span className="ship__title-font">CRUISER</span>
            </div>
            <img className="img cruiser" src="./img/cruiser.jpg" alt="Cruiser" />
        </div>
    );
}