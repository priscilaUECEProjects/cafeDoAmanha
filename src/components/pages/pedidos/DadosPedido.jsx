import { useState } from 'react';
import { Link } from 'react-router-dom';
import './DadosPedido.css';
import { useEffect } from 'react';
import Inputmask from 'inputmask';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

export default function DadosPedido() {
    const [nomeUsuario, setNomeUsuario] = useState('');
    useEffect(() => {
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            Inputmask({ mask: "(99) 99999-9999" }).mask(phoneInput);
        }
    }, []);
    return (
        <div>
            <Header />
            <div className="pedido-info-container">
            <div className="pedido-info">
            <h2>Informações para entrega</h2>
            <form className="pedido-form">
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" value={nomeUsuario}
                onChange={(e) => setNomeUsuario(e.target.value)} required />
                <label htmlFor="address">Endereço:</label>
                <input type="text" id="address" name="address" required />
                <label htmlFor="phone">Telefone:</label>
                <input type="tel" id="phone" name="phone" required />
                <label htmlFor="payment">Forma de pagamento:</label>
                <div className="pedido-info-payment">
                    <div className="pedido-info-payment-item">
                        <label htmlFor="cash">Dinheiro</label>
                        <input type="radio" id="cash" name="payment" value="cash" required />
                    </div>
                    <div className="pedido-info-payment-item">
                        <label htmlFor="pix">Pix</label>
                        <input type="radio" id="pix" name="payment" value="pix" required />
                    </div>
                </div>
                <div className="pedido-info-buttons">
                    <Link to={'/pedido-finalizado'} state={{nomeUsuario: nomeUsuario}}><button type="button" className="pedido-info-button">Finalizar Pedido</button></Link>
                    <Link to={'/pedido'}><button type="button" className="voltar-pedido-button">Voltar</button></Link>
                </div>
            </form>
        </div>   
        </div>
        <Footer />
        </div>    
    );
}