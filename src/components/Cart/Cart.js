import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total, prd) =>total + prd.price, 0)

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const tax = (total / 10).toFixed(2);

    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    
    return (
        <div>
            <h3>Order Summery</h3>
            <p>Items Order: {cart.length}</p>
            <p>Total price: {formatNumber (total)}</p>
            <p>Product price: {formatNumber(total)}</p>
            <p><small>Shipping cost: {shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p className="total-price">Total price: {grandTotal}</p>
            <br/>
            <Link to="/review">
            <button className="main-btn">Review Order</button>
            </Link>
    
        </div>
    );
};

export default Cart;