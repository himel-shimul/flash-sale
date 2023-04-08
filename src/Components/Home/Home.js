import React from 'react';
import FlashSalePart from '../FlashSalePart/FlashSalePart';
import TrendingPart from '../TrendingPart/TrendingPart';

const Home = () => {
    return (
        <div className=' w-[1920px]'>
            <FlashSalePart></FlashSalePart>
            <TrendingPart></TrendingPart>
        </div>
    );
};

export default Home;