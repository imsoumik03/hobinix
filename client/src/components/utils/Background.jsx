import React from 'react';
import itachi from '../../assets/tests/Naruto Redraws.jpeg';

const Background = () => {
    return (
        <div className="w-screen h-screen absolute -z-10 after:absolute after:top-0 after:h-screen after:w-screen after:bg-[#0009]">
            <img src={itachi} className="w-screen h-screen" />
        </div>
    );
};

export default Background;
