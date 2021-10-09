import React from 'react';
import './HamburgerButton.css';
function HamburgerButton(props) {
    return (
        <div className="hamburgerButton" onClick={props.click}>
            &#9776; <h6>All</h6>
        </div>
    );
}

export default HamburgerButton;