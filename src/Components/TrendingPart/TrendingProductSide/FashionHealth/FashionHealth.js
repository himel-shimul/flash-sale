import React, { useEffect, useState } from 'react';
import TrendingProductCard from '../TrendingProductCard/TrendingProductCard';

const FashionHealth = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("trending-products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])
    return (
        <div>
            {/* <h2><strong>Fashion</strong> For Health</h2> */}
            {/* {products.map(product => (
                <TrendingProductCard key={product.id} product={product}></TrendingProductCard>
            ))} */}
        </div>
    );
};

export default FashionHealth;