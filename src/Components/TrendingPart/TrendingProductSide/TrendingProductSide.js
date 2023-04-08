import React from 'react';
import FashionWomen from './FashionWomen/FashionWomen';
import FashionHealth from './FashionHealth/FashionHealth';
import FashionWinter from './FashionWinter/FashionWinter';

const TrendingProductSide = () => {
    return (
        <div className='lg:flex justify-between lg:mx-8'>
            <div className=''>
            <FashionWomen/>
            </div>
            <FashionHealth/>
            <FashionWinter/>
        </div>
    );
};

export default TrendingProductSide;