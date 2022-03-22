import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import Beranda from './Beranda';
import Gallery from './Gallery';
import About from './About';
import Cart from './Cart';
import Contact from './Contact';

const Main = () => (
    
    <Routes>
        <Route exact path="/" element={<Beranda/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
)

export default Main;