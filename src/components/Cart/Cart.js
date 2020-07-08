import React from 'react';

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
            <p>Items Order:{cart.length}</p>
            <p>Total price:{total}</p>
            <p>Product price:{formatNumber(total)}</p>
            <p><small>Shipping cost:{shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total price:{grandTotal}</p>
    
        </div>
    );
};

export default Cart;