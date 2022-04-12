import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';



const Product = (props) => {
    const {name,img,price,seller,stock,star}=props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart}/>
    // console.log(props)
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p> by : {seller}</p>
                <p>Price : {price}</p>
                <p><small>Only {stock} left in stock - order soon </small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                    style={{marginBottom:'10px'}}
                    />
                <br />
                <button className='btn-regular' onClick={()=>props.handleAddToCart(props.product)}>{cartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;