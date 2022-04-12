import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(()=>{
        // console.log('product api called');
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setDisplayProducts(data);
            // console.log('product api received');
            })
    },[])
    const [cart, setCart]=useState([]);

    useEffect(()=>{
        // console.log('localStorage called');
       if(products.length){
        const savedCart =  getStoredCart();
        const storedCart = [];
        for(const key in savedCart){
         
            const addedProduct = products.find(product => product.key==key);
            if(addedProduct){
                const quantity = savedCart[key];
                addedProduct.quantity=quantity;
                // console.log(addedProduct);
                storedCart.push(addedProduct);
            }
           
        }
        setCart(storedCart);
       }
    },[products])

    const handleAddToCart = (product) =>{
       const newCart = [...cart, product];
       setCart(newCart);
       addToDb(product.key);
    }
    const handleSearch = event =>{
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
        console.log(matchedProducts.length)
    }
    return (
        <div>
            <div className='search-container'>
                <input onChange={handleSearch} type="text" placeholder='Search Product'/>
            </div>
            <div className='shop-container'>
            <div className="product-container">
                <h2>Products : {products.length}</h2>
                {
                    displayProducts.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}>
                        </Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
            
        </div>
        </div>
        
    );
};

export default Shop;