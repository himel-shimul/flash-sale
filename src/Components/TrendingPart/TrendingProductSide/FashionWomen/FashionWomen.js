import React, { useEffect, useState } from 'react';
import TrendingProductCard from '../TrendingProductCard/TrendingProductCard';

const FashionWomen = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("trending-products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])
    return (
        <div>
            <h2 className='text-2xl my-7'><strong>Fashion</strong> For Women</h2>
            {products.map(product => (
                <TrendingProductCard key={product.id} product={product}></TrendingProductCard>
            ))}
        </div>
    );
};

export default FashionWomen;