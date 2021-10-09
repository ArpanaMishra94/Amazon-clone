import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
export default function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG1.png" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail or mobile phone number</h5>
                    <input type="text"/>
                    <button>Continue</button>
                    <h6 className="login__text1">By continuing, you agree to Amazon's
                        <a href="Conditions of">Conditions of</a>
                    </h6>
                    <h6>
                        <a href="Use">Use
                        </a>
                        and
                        <a href="Privacy Notice">Privacy Notice.</a>
                    </h6>
                    <p>
                        <a href="Need help?">
                            Need help?</a>
                    </p>
                </form>
            </div>
            <p>New to Amazon?</p>
            <button>Create your Amazon account</button>
        </div>
    )
}
