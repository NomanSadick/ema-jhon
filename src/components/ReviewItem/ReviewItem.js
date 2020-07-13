import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle={
        padding:"10px",
        border:"1px solid lightgray",
        marginBottom:"5px",
        marginLeft:"150px",
      };
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button 
            className="main-btn"
            onClick={()=>props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;