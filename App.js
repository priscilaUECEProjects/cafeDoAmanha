import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './components/About';
import Stories from './components/Stories';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                
                <Route path="/sobre-nos" element={<About />} /> 
                <Route path="/histórias" element={<Stories />} /> 

            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
