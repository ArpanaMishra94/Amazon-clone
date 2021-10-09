import React, {useState} from 'react';
import './Header2.css';
import SideBar from './SideBar';
export default function Header2() {
    return (
        <div className="header2">
            <div className="header2__left">
                <SideBar/>
            </div>
            <div className="header2__mid">
                <h4>Mobiles</h4>
                <h4>Best Sellers</h4>
                <h4>Fashion</h4>
                <h4>Electronics</h4>
                <h4>Customer Service</h4>
                <h4>Amazon Pay</h4>
                <h4>Prime</h4>
                <h4>Today's Deals</h4>
                <h4>New Releases</h4>
                <h4>Computers</h4>
                <h4>Home & Kitchen</h4>
                <h4>Books</h4>
                <h4>Toys & Games</h4>
                <h4>Sell</h4>
            </div>
            <div className="header2__right">
                <img src="https://play-lh.googleusercontent.com/QrDjFxk6q1snmS96tGAhMJYl7N1_thOJxR62etDJbL5nhSozwdCoXC55nHjL2NFD8d8" alt=""/><h3>Shopping made easy | Download the app</h3>
            </div>
        </div>
    )
}
