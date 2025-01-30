import { Link, useParams } from 'react-router-dom';
import BotaoAdicionar from './BotaoAdicionar';
import './DetalhesMenu.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function DetalhesMenu({ menuItems, onAdicionar }) {
    const { categoria, id } = useParams();
    const item = menuItems?.[categoria]?.find((item) => item.id === parseInt(id, 10));

    if (!item) {
        return <h1>Item não encontrado</h1>;
    }

    return (
        <div>
            <Header />
        <div className='details-container'>
            <div className='details-content'>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
                <h2>R$ {item.price.toFixed(2)}</h2>
                <h3><strong>Ingredientes:</strong></h3>
                <ul>
                    {item.ingredients.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="buttons">
                <Link to={'/menu'} ><button className='voltar-menu'>Voltar</button></Link>
                <BotaoAdicionar onAdicionar={()=> onAdicionar(item)}/>
            </div>
        </div>
        <Footer />
        </div>
    );
}
