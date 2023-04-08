import React from 'react';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';

const FlashSalePart = () => {
    return (
        <div className='flex my-8 justify-center items-center'>
            <div className="w-[1410px]">
            <LeftSide></LeftSide>
            </div>
            <div className="w-[282px]">
            <RightSide></RightSide>
            </div>
        </div>
    );
};

export default FlashSalePart;