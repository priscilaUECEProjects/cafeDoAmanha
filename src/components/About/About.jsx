import React from 'react';
import './About.css';
import ImageCarousel from './Carousel';

function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h1>Sobre Nós</h1>
                <p>O Café do Amanhã foi fundado por Priscila, Maria e Pedro, apaixonados por café e pela cidade de Fortaleza.
                Localizado na Avenida Beira Mar, nosso café oferece um refúgio acolhedor onde você pode desfrutar de 
                sabores únicos e de uma vista deslumbrante.</p>
                <ImageCarousel />
            </div>
        </section>
    );
}

export default About;