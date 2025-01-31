import React from 'react';
import './About.css';
import ImageCarousel from './Carousel';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

function About() {
    return (
        <div>
        <Header />  
        <section id="about" className="about-section">
            <div className="container">
                <h1>Sobre Nós</h1>
                <p>O Café do Amanhã foi fundado por Priscila e Maria, apaixonadas por café e pela cidade de Fortaleza.
                <br/>Localizado na Avenida Beira Mar, nosso café oferece um refúgio acolhedor onde você pode desfrutar de 
                sabores únicos e de uma vista deslumbrante.</p>
                <ImageCarousel />
            </div>
        </section>
        <Footer />
        </div>
    );
}

export default About;