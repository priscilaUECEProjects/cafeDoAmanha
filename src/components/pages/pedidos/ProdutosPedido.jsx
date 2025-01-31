import { Link } from "react-router-dom";
import "./ProdutosPedido.css";
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

export default function ProdutosPedido({ pedido, isVisible, totalCompra }) {
    return (
        <div>
            <Header />
        {isVisible && (<div className="pedido-container">
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
            <div className="total">
                <h3>Total: R${totalCompra.toFixed(2)}</h3>
            </div>
            <Link to="/pedido-info"><button className="pedido-button">Confirmar Pedido</button></Link>
        </div>)} 
        <div className="empty-pedido">
            <h1 className="empty-pedido-text">Seu pedido está vazio.</h1>
        </div>
        <Footer />
        </div>
    );
}

