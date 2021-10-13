import React from 'react'
import product from '../assets/download.jpeg'
import cart from '../assets/cart.jpg'

const Header = (props) => {
    console.warn("Header", props.data);
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src={cart} alt="" />
            </div>
        </div>
    )
}

export default Header
