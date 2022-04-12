import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart}=props;
    console.log(cart);
    let totalQuantity = 0;
    let total = 0 ;
    for (const product of cart){
        if(!product.quantity){
            product.quantity=1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    // const totalReducer = (previous, product) => previous+product.price;
    // const total = cart.reduce(totalReducer,0);

    const shipping = 15;
    const tax = (total+shipping)/10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
             <h3>Order Summary</h3>
                <h5>Items ordered : {totalQuantity}</h5>
                <p>Total : {total.toFixed(2)}</p>
                <p>Shipping : {shipping}</p>
                <p>Tax : {tax.toFixed(2)}</p>
                <h4 className='grandTotal'>Grand Total : {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;