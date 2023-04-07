import React from 'react';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';

const FlashSalePart = () => {
    return (
        <div className='flex my-8'>
            <div className="w-4/6">
            <LeftSide></LeftSide>
            </div>
            <div className="w-1/6">
            <RightSide></RightSide>
            </div>
        </div>
    );
};

export default FlashSalePart;