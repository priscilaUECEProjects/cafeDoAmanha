import React, {useState} from 'react';
import { Tab, Tabs} from 'react-bootstrap';
import './/Menu.css';

import menu1 from './imagens/graos.jpg';
import menu2 from './imagens/petit.jpg';
import menu3 from './imagens/croissant.jpeg';
import menu4 from './imagens/milk.jpeg';
import menu5 from './imagens/cha.jpeg';
import { Link } from 'react-router-dom';

export default function Menu({ menuItems, onAdicionar }){
    const [imagemAtual, setImagemAtual] = useState(menu1);

    return(
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
                            case 'BebidasGeladas':
                                setImagemAtual(menu4);
                                break;
                            case 'chás':
                                setImagemAtual(menu5)
                                break;
                            default:
                                setImagemAtual(menu1);
                        }
                    }}>
                        {Object.entries(menuItems).map(([categoria, index]) => (
                            <Tab key={categoria} eventKey={categoria} title={categoria.charAt(0).toUpperCase() + categoria.slice(1)}>
                                <ul className="menu-list">
                                    {menuItems[categoria].map((item, index) => (
                                        <li key={index}>
                                            <div>{item.name}<Link to={`/detalhes/${categoria}/${item.id}`} className='details-link'>
                                                <span className="material-symbols-outlined icon">chevron_right</span>
                                                </Link></div>
                                            <div className='right-info'>
                                                <span className='menu-price'>R$ {item.price.toFixed(2)}</span>| 
                                                <button className='menu-button' onClick={()=> onAdicionar(item)}>+</button>
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
    );
}

