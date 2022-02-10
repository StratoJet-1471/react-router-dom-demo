import React from 'react';

import './css/style.css';

export function Destroyer() {
    return (
        <div className="ship">
            <div className="ship__title">
                <span className="ship__title-font">DESTROYER</span>
            </div>
            <img className="img destroyer" src="./img/destroyer.jpg" alt="Destroyer" />
        </div>
    );
}