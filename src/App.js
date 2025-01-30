import './App.css';
import Menu from './components/menu/Menu';
import DetalhesMenu from './components/menu/DetalhesMenu';
import Home from './components/Home';
import ProdutosPedido from './components/pedidos/ProdutosPedido';
import DadosPedido from './components/pedidos/DadosPedido';
import FinalPedido from './components/pedidos/FinalPedido';
import About from './components/About/About';
import Stories from './components/Stories/Stories';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';


function App() {
    const menuItems = {
        cafés: [
          {
            id: 1,
            name: "Águas de Março",
            price: 5.0,
            description: "Um café curto e encorpado, perfeito para começar o dia.",
            ingredients: ["Café espresso 100% arábica"],
            quantity: 0,
          },
          {
            id: 2,
            name: "Sampa",
            price: 6.5,
            description: "Café espresso com um toque de leite vaporizado.",
            ingredients: ["Café espresso", "Leite vaporizado"],
            quantity: 0,
          },
          {
            id: 3,
            name: "Garota de Ipanema",
            price: 7.0,
            description: "Café espresso adoçado com leite condensado.",
            ingredients: ["Café espresso", "Leite condensado"],
            quantity: 0,
          },
          {
            id: 4,
            name: "Chega de Saudade",
            price: 6.0,
            description: "Café longo com uma camada de espuma cremosa.",
            ingredients: ["Café espresso", "Água quente", "Espuma cremosa"],
            quantity: 0,
          },
          {
            id: 5,
            name: "Carinhoso",
            price: 8.0,
            description: "Café espresso com chocolate quente e chantilly.",
            ingredients: ["Café espresso", "Chocolate quente", "Chantilly"],
            quantity: 0,
          },
          {
            id: 6,
            name: "Cappuccino Malandragem",
            price: 9.0,
            description: "Cappuccino com um toque de canela e cacau.",
            ingredients: ["Café espresso", "Leite vaporizado", "Cacau", "Canela"],
            quantity: 0,
          },
        ],
        sobremesas: [
          {
            id: 7,
            name: "Doce de Maracujá",
            price: 8.0,
            description: "Uma sobremesa cremosa com o sabor tropical do maracujá.",
            ingredients: ["Creme de maracujá", "Leite condensado", "Gelatina"],
            quantity: 0,
          },
          {
            id: 8,
            name: "Romeu e Julieta",
            price: 9.0,
            description: "Clássica combinação de queijo e goiabada.",
            ingredients: ["Queijo fresco", "Goiabada cascão"],
            quantity: 0,
          },
          {
            id: 9,
            name: "Chão de Giz",
            price: 10.0,
            description: "Bolo de chocolate com cobertura cremosa de brigadeiro.",
            ingredients: ["Bolo de chocolate", "Brigadeiro"],
            quantity: 0,
          },
          {
            id: 10,
            name: "Bolinho de Chuva",
            price: 6.5,
            description: "Tradicional bolinho polvilhado com açúcar e canela.",
            ingredients: ["Farinha de trigo", "Ovos", "Leite", "Canela", "Açúcar"],
            quantity: 0,
          },
          {
            id: 11,
            name: "Coração Bobo",
            price: 7.5,
            description: "Torta de frutas vermelhas com massa crocante.",
            ingredients: ["Frutas vermelhas", "Massa de torta", "Chantilly"],
            quantity: 0,
          },
          {
            id: 12,
            name: "Pettit Gateau Ilegais",
            price: 12.0,
            description: "Bolo quente de chocolate servido com sorvete de baunilha.",
            ingredients: ["Chocolate amargo", "Farinha de trigo", "Ovos", "Sorvete"],
            quantity: 0,
          },
        ],
        especiais: [
          {
            id: 13,
            name: "Tarde em Itapoã",
            price: 12.0,
            description: "Smoothie tropical com frutas e leite de coco.",
            ingredients: ["Manga", "Abacaxi", "Leite de coco"],
            quantity: 0,
          },
          {
            id: 14,
            name: "O Canto da Cidade",
            price: 10.0,
            description: "Frappuccino gelado com chantilly.",
            ingredients: ["Café espresso", "Gelo", "Chantilly"],
            quantity: 0,
          },
          {
            id: 15,
            name: "Fora da Ordem",
            price: 11.5,
            description: "Café gelado com leite de amêndoas e cacau.",
            ingredients: ["Café gelado", "Leite de amêndoas", "Cacau em pó"],
            quantity: 0,
          },
          {
            id: 16,
            name: "O Leãozinho",
            price: 9.5,
            description: "Refrescante suco de laranja natural.",
            ingredients: ["Suco de laranja fresco"],
            quantity: 0,
          },
          {
            id: 17,
            name: "Iron Maiden",
            price: 11.5,
            description: "Drink energético com café e leite.",
            ingredients: ["Café espresso", "Leite", "Energetico"],
            quantity: 0,
          },
          {
            id: 18,
            name: "Metallica",
            price: 9.5,
            description: "Café com creme de avelã e raspas de chocolate.",
            ingredients: ["Café espresso", "Creme de avelã", "Chocolate"],
            quantity: 0,
          },
        ],
        bebidasGeladas: [
          {
            id: 19,
            name: "Sorvete de Baunilha",
            price: 7.0,
            description: "Sorvete cremoso com sabor clássico de baunilha.",
            ingredients: ["Leite", "Baunilha", "Açúcar"],
            quantity: 0,
          },
          {
            id: 20,
            name: "Milk Shake de Chocolate",
            price: 10.0,
            description: "Milk shake gelado e cremoso de chocolate.",
            ingredients: ["Leite", "Chocolate", "Sorvete"],
            quantity: 0,
          },
          {
            id: 21,
            name: "Milk Shake de Morango",
            price: 10.0,
            description: "Milk shake gelado com pedaços de morango.",
            ingredients: ["Leite", "Sorvete", "Morango"],
            quantity: 0,
          },
          {
            id: 22,
            name: "Vitamina de Banana",
            price: 8.0,
            description: "Bebida saudável feita com banana e leite.",
            ingredients: ["Banana", "Leite"],
            quantity: 0,
          },
          {
            id: 23,
            name: "Vitamina de Morango",
            price: 8.5,
            description: "Smoothie com morangos frescos e leite.",
            ingredients: ["Morango", "Leite"],
            quantity: 0,
          },
        ],
        chás: [
          {
            id: 24,
            name: "Chá de Hortelã",
            price: 4.5,
            description: "Chá refrescante com hortelã natural.",
            ingredients: ["Folhas de hortelã", "Água quente"],
            quantity: 0,
          },
          {
            id: 25,
            name: "Chá Verde",
            price: 5.0,
            description: "Chá verde puro com propriedades antioxidantes.",
            ingredients: ["Chá verde", "Água quente"],
            quantity: 0,
          },
          {
            id: 26,
            name: "Chá de Camomila",
            price: 4.5,
            description: "Chá relaxante com flores de camomila.",
            ingredients: ["Flores de camomila", "Água quente"],
            quantity: 0,
          },
          {
            id: 27,
            name: "Chá de Frutas Vermelhas",
            price: 6.0,
            description: "Chá aromático com frutas vermelhas.",
            ingredients: ["Frutas vermelhas", "Água quente"],
            quantity: 0,
          },
          {
            id: 28,
            name: "Chá de Gengibre e Limão",
            price: 5.5,
            description: "Chá com gengibre fresco e um toque cítrico.",
            ingredients: ["Gengibre", "Limão", "Água quente"],
            quantity: 0,
          },
        ],
      };
    
      const [pedido, setPedido] = useState([]);
    
      const adicionarItem = (novoItem) => {
        setPedido((prevPedido) => {
          return prevPedido.map(item =>
            item.id === novoItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ).concat(
            prevPedido.some(item => item.id === novoItem.id)
              ? []
              : { ...novoItem, quantity: 1 }
          );
        });
      };


    return (
        <Router>
            <Routes>
            <Route path="/sobre-nos" element={<About />} /> 
            <Route path="/historias" element={<Stories />} />
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu menuItems={menuItems} onAdicionar={adicionarItem} />} />
            <Route path="/detalhes/:categoria/:id" element={<DetalhesMenu menuItems={menuItems} onAdicionar={adicionarItem} />} />
            <Route path="/pedido" element={<ProdutosPedido pedido={pedido} />} />
            <Route path="/pedido-info" element={<DadosPedido />}/>
            <Route path="/pedido-finalizado" element={<FinalPedido />} /> 
            </Routes>
        </Router>
    );
}

export default App;
