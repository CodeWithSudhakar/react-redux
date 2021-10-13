import React from 'react'
import product from '../assets/download.jpeg'
import cart from '../assets/cart.jpg'

const Home = (props) => {
    // console.warn("Home", props.data);
    console.warn("Home", props);
    return (
        <div>
            <h2>React Redux</h2>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={product} />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Shirt
                    </span>
                    <span>
                        Price: 350.00 &#8377;
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={() => props.addToCartHandler({ Price: 350, Name: "Shirt" })}
                    >Add To Cart</button>
                    <button className="remove-cart-btn"
                        onClick={() => props.removeToCartHandler()}
                    >Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home
