import React from 'react'
import product from '../assets/download.jpeg'
import cart from '../assets/cart.jpg'

const Home = (props) => {
    return (
        <div>
            <div className="add-to-cart">
                <img src={cart} alt="" />
            </div>
            <h2>Home Component</h2>
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
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home
