import React from 'react';
import './Checkout.css';
import Footer from './Footer';
export default function Checkout() {
    return (
        <div className = "checkout">
            <div className = "checkout__top">
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQF8mY1qCkRPbSwMpwH_QowfQV6BfZWYUcw&usqp=CAU" alt =""/>
            <div className = "checkout__topRight">   
                  <h2>Your Amazon Basket is empty</h2>
                  <p>Shop today’s deals</p>
                  <div className = "checkout__buttons">
                      <button className = "checkout__signInButton">Sign in to your account</button>
                      <button className = "checkout__signUpButton">Sign up now</button>
                  </div>
            </div>
            </div>
           <p>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.<br/>
            Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
            <div className = "checkout__midBottom">
             
            </div>
            <Footer/>
        </div>
    )
}