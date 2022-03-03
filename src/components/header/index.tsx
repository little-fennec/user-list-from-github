import React from 'react';

import style from './header.module.scss';

const Header = () => {
    return (
        <div className={style.header}>
            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" >
                <g className="layer">
                    <title>Layer 1</title>
                    <path
                          d="m25,10c-8.3,0 -15,6.7 -15,15c0,6.6 4.3,12.2 10.3,14.2c0.8,0.1 1,-0.3 1,-0.7l0,-2.6c-4.2,0.9 -5.1,-2 -5.1,-2c-0.7,-1.7 -1.7,-2.2 -1.7,-2.2c-1.4,-0.9 0.1,-0.9 0.1,-0.9c1.5,0.1 2.3,1.5 2.3,1.5c1.3,2.3 3.5,1.6 4.4,1.2c0.1,-1 0.5,-1.6 1,-2c-3.3,-0.4 -6.8,-1.7 -6.8,-7.4c0,-1.6 0.6,-3 1.5,-4c-0.2,-0.4 -0.7,-1.9 0.1,-4c0,0 1.3,-0.4 4.1,1.5c1.2,-0.3 2.5,-0.5 3.8,-0.5c1.3,0 2.6,0.2 3.8,0.5c2.9,-1.9 4.1,-1.5 4.1,-1.5c0.8,2.1 0.3,3.6 0.1,4c1,1 1.5,2.4 1.5,4c0,5.8 -3.5,7 -6.8,7.4c0.5,0.5 1,1.4 1,2.8l0,4.1c0,0.4 0.3,0.9 1,0.7c6,-2 10.2,-7.6 10.2,-14.2c0.1,-8.2 -6.6,-14.9 -14.9,-14.9z"
                          fill="#ffffff"  id="svg_1"/>
                </g>
            </svg>
            <div className={style.title}><h1>GitHub User List</h1></div>
        </div>
    )
};

export default Header;