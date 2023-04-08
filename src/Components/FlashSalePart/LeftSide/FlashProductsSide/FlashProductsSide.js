import React, { useEffect, useState } from 'react';
import FlashProductCard from './FlashProductCard/FlashProductCard';

const FlashProductsSide = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("flash-products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])
    return (
        <div className='lg:flex'>
            {products.map(product => (
                <FlashProductCard key={product.id} product={product}></FlashProductCard>
            ))}
        </div>
    );
};

export default FlashProductsSide;