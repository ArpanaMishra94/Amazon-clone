import React from 'react';
import './HomeFooter.css';
export default function HomeFooter() {
    return (
        <div className="homeFooter">
            <div className="homeFooter__top"></div>
            <div className="homeFooter__mid">
                <div className="homeFooter__midElement">
                    <p>See personalized recommendations</p>
                    <button>
                        <h4>Sign In</h4>
                    </button>
                    <h6>New customer?
                        <a href="Start here.">
                            Start here.</a>
                    </h6>
                </div>
            </div>
            <div className="homeFooter__bottom"></div>
        </div>
    )
}
