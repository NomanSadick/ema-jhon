import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name"><Link to={"/product/"+key}>{name}</Link></h3>
                <br />
                <p>by:{seller}</p>
                <br />
                <p>${price}</p>
                <br />
                <p><small>Only{stock}left in stck-Order soon</small></p>
                { props.showAddToCart === true && <button 
                    className="main-btn"
                    onClick={()=>props.handleAddProduc(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                    </button>}
            </div>
        </div>
    );
};

export default Product;