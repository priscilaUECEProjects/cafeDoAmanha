import React, {useState} from 'react';
import { Tab, Tabs} from 'react-bootstrap';
import './/Menu.css';
import BotaoAdicionar from './BotaoAdicionar';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

import menu1 from './imagens/graos.jpg';
import menu2 from './imagens/petit.jpg';
import menu3 from './imagens/croissant.jpeg';
import menu4 from './imagens/milk.jpeg';
import menu5 from './imagens/cha.jpeg';
import { Link } from 'react-router-dom';

export default function Menu({ menuData, onAdicionar }){
    const [imagemAtual, setImagemAtual] = useState(menu1);

    return(
        <div>
        <Header/>
        <div className='menu-container'>
            <div className='menu-content'>
                <div className='menu-image'>
                    <img src={imagemAtual} alt='menu'/>
                </div>
                <div className='menu-tabs'>
                    <Tabs defaultActiveKey="cafés" id="styled-menu-tabs" className='mb-3'
                    onSelect={(key)=>{
                        switch(key){
                            case 'cafés':
                                setImagemAtual(menu1);
                                break;
                            case 'sobremesas':
                                setImagemAtual(menu2);
                                break;
                            case 'especiais':
                                setImagemAtual(menu3);
                                break;
                            case 'bebidasGeladas':
                                setImagemAtual(menu4);
                                break;
                            case 'chás':
                                setImagemAtual(menu5)
                                break;
                            default:
                                setImagemAtual(menu1);
                        }
                    }}>
                        {Object.entries(menuData).map(([categoria, index]) => (
                            <Tab key={categoria} eventKey={categoria} title={categoria.charAt(0).toUpperCase() + categoria.slice(1)}>
                                <ul className="menu-list">
                                    {menuData[categoria].map((item, index) => (
                                        <li key={index}>
                                            <div>{item.name}<Link to={`/detalhes/${categoria}/${item.id}`} className='details-link'>
                                                <span className="material-symbols-outlined icon">chevron_right</span>
                                                </Link></div>
                                            <div className='right-info'>
                                                <span className='menu-price'>R$ {item.price.toFixed(2)}</span>| 
                                                <BotaoAdicionar onAdicionar={()=> onAdicionar(item)}/>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </Tab>
                        ))}
                    </Tabs>
                </div>
                
            </div>
        </div>
        <Footer />
    </div>
    );
}

