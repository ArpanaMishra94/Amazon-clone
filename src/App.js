import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Slider from './Components/Slider';
import {SliderData} from './Components/SliderData';
import Header2 from './Components/Header2';
import HomeFooter from './Components/HomeFooter';
function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/checkout">
                        <Header/>
                        <Header2/>
                        <Checkout/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/">
                        <Header/>
                        <Header2/>
                        <Slider slides={SliderData}/>
                        <Home/>
                        <HomeFooter/>
                        <Footer/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
