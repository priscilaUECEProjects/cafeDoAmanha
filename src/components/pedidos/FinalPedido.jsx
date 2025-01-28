import React from "react";
import { Link } from "react-router-dom";
import "./FinalPedido.css";

export default function FinalPedido() {
    return (
        <div className="pedido-final-container">
            <div className="pedido-final-content">
                <h2>Pedido finalizado com sucesso.</h2>
                <p>Obrigada por comprar conosco!</p>
                <Link to={'/'}><button type="button" className="pedido-final-button">Voltar para a página inicial</button></Link>
            </div>
        </div>
    );
}