import React from "react";
import { Navbar, Brand, CTA }from './components';
import { Footer, Blog, Possibility, WhatGPT3, Header, Features } from './containers';
import './App.css';
import './index.css';

const App = () => {
    return ( 
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    </div>
    );

}
export default App;