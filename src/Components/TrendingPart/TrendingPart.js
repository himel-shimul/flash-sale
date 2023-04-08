import React from 'react';
import TrendingLogo from './TrendingLogo/TrendingLogo';
import TrendingProductSide from './TrendingProductSide/TrendingProductSide';

const TrendingPart = () => {
    return (
        <div className='my-8 px-20 justify-center items-center text-center bg-[#FAFAFA]'>
            <TrendingLogo></TrendingLogo>
            <TrendingProductSide></TrendingProductSide>
        </div>
    );
};

export default TrendingPart;