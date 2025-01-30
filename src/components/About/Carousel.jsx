
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';


import foto1 from './images/fundadores3.jpg';
import foto2 from './images/comidas2.jpg';
import foto3 from './images/espaço.jpeg';

function ImageCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={foto1}
                    alt="Primeira imagem"
                />
                <Carousel.Caption>
                    <h3>Fundadores</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={foto2}
                    alt="Segunda imagem"
                />
                <Carousel.Caption>
                    <h3>Nossas delícias</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={foto3}
                    alt="Terceira imagem"
                />
                <Carousel.Caption>
                    <h3>Nosso espaço</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageCarousel;