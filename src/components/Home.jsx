import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Café Gourmet</h1>
      <p>Explore nosso menu com uma seleção incrível de produtos!</p>
      <Link to="/menu" className="home-link">
        Ir para o Menu
      </Link>
      <Link to="/pedido" className='home-link'>
      Ir para Pedido</Link>
      <Link to="/sobre-nos" className='home-link'>
      Ir para Sobre nos</Link>
      <Link to="/historias" className='home-link'>
      Ir para Historias</Link>
      <style>{`
      .home-link{
        display: flex;
        justify-content: space-between;
      }
      `}</style>
    </div>
  );
};

export default Home;
