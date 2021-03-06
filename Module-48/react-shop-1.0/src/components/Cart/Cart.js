import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart}=props;
    let total = 0;
    for(const product of cart){
        total = total+product.price;
    }

    const shipping = 15;
    const tax = (total+shipping)/10;
    const grandTotal = total+shipping+tax;
    return (
        <div>
            <h2>Order Summary</h2>
               <h3>Total order : {props.cart.length}</h3>
               <p>Total : {total.toFixed(2)}</p>
               <p>Shipping : {shipping}</p>
               <p>Tax : {tax.toFixed(2)}</p>
               <p>Grand Total : {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;