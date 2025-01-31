import './App.css';
import Menu from './components/pages/menu/Menu';
import menuData from './data/menuData.json';
import DetalhesMenu from './components/pages/menu/DetalhesMenu';
import ProdutosPedido from './components/pages/pedidos/ProdutosPedido';
import DadosPedido from './components/pages/pedidos/DadosPedido';
import FinalPedido from './components/pages/pedidos/FinalPedido';
import About from './components/pages/About/About';
import Stories from './components/pages/Stories/Stories';
import Hero from './components/pages/hero/Hero';
import Contato from './components/pages/contato/Contato';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

export default function App() {
      const [pedido, setPedido] = useState([]);
      const [isVisible, setIsVisible] = useState(false);
      const [totalCompra, setTotalCompra] = useState(0);
    
      const adicionarItem = (novoItem) => {
        setPedido((prevPedido) => {
          if (!prevPedido.length) {
            setIsVisible(true);
          }
          let itemExistente = false;
          const novoPedido = prevPedido.map((item)=>{
          if(item.id === novoItem.id){
            itemExistente = true;
            return {...item, quantity: item.quantity + 1};
          }
            return item;
          });
          if(!itemExistente){
            novoPedido.push({...novoItem, quantity: 1});
          }
         
          const novoTotal = novoPedido.reduce((total, item)=> total + item.price * item.quantity, 0);
          setTotalCompra(novoTotal);
          return novoPedido;
        });

      };

    return (
        <Router>
            <Routes>
            <Route path="/sobre-nos" element={<About />} /> 
            <Route path="/historias" element={<Stories />} />
            <Route path="/" element={<Hero />} />
            <Route path="/menu" element={<Menu menuData={menuData} onAdicionar={adicionarItem} />} />
            <Route path="/detalhes/:categoria/:id" element={<DetalhesMenu menuData={menuData} onAdicionar={adicionarItem} />} />
            <Route path="/pedido" element={<ProdutosPedido pedido={pedido} isVisible={isVisible} totalCompra={totalCompra}/>} />
            <Route path="/pedido-info" element={<DadosPedido />}/>
            <Route path="/pedido-finalizado" element={<FinalPedido />} /> 
            <Route path="/contato" element={<Contato/>} />
            </Routes>
        </Router>
    );
}

