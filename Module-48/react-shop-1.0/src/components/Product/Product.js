import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name,img,price,stock,seller}=props.product;
    // console.log(props)
    return (
        <div className='product'>
            {/* image */}
            <div>
            <img src={img} alt="" />
            </div>
            {/* Info */}
           <div>
           <h4 className='product-name'>{name}</h4>
           <p><small>by : {seller}</small></p>
           <p>Price : {price}</p>
           <p><small>only {stock} left in stock - order soon</small></p>
           <button onClick={() => props.handleAddToCart(props.product)}
            className='btn-regular'>add to cart</button>
           </div>
        </div>
    );
};

export default Product;