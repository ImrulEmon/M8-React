import React, { useEffect, useState } from 'react';
import './Shop.css';


const Shop = () => {
    const [products,setProducts]=useState([]);
    useEffect( ()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <div className='shop-container'>
           <div className="product-container">
               <h2>Products : {products.length}</h2>
           </div>
           {/* cart */}
           <div className="cart-container">
               <h2>Order Summary</h2>
               <h3>Total order</h3>
           </div>
        </div>
    );
};

export default Shop;