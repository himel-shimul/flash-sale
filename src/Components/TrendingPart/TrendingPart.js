import React from 'react';
import TrendingLogo from './TrendingLogo/TrendingLogo';
import TrendingProductSide from './TrendingProductSide/TrendingProductSide';

const TrendingPart = () => {
    return (
        <div className='my-8 justify-center items-center text-center'>
            <TrendingLogo></TrendingLogo>
            <TrendingProductSide></TrendingProductSide>
        </div>
    );
};

export default TrendingPart;