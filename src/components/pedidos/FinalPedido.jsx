import React from "react";
import { Link } from "react-router-dom";
import "./FinalPedido.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function FinalPedido() {
    return (
        <div>
            <Header />
        <div className="pedido-final-container">
            <div className="pedido-final-content">
                <h2>Pedido finalizado com sucesso.</h2>
                <p>Obrigada por comprar conosco!</p>
                <Link to={'/'}><button type="button" className="pedido-final-button">Voltar para a página inicial</button></Link>
            </div>
        </div>
        <Footer />
        </div>
    );
}