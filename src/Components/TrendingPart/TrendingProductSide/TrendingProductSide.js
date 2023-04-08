import React from 'react';
import FashionWomen from './FashionWomen/FashionWomen';
import FashionHealth from './FashionHealth/FashionHealth';
import FashionWinter from './FashionWinter/FashionWinter';

const TrendingProductSide = () => {
    return (
        <div className='flex justify-evenly'>
            <div className='rtl'>
            <FashionWomen/>
            </div>
            <FashionHealth/>
            <FashionWinter/>
        </div>
    );
};

export default TrendingProductSide;