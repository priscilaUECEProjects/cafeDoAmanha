import React from "react";
import { Link } from "react-router-dom";
import "./ProdutosPedido.css";

export default function ProdutosPedido({ pedido }) {
    return (
        <div className="pedido-container">
            <table className="pedido-table">
                <thead>
                    <tr>
                        <th>Item Selecionado</th>
                        <th>Preço Unitário</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {pedido.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>R${item.price.toFixed(2)}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/pedido-info"><button className="pedido-button">Confirmar Pedido</button></Link>
        </div>
    );
}

