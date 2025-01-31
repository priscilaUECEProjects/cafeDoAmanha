import React from 'react';
import './BotaoAdicionar.css';

export default function BotaoAdicionar({ onAdicionar }) {
    return (
        <button className='add-button' onClick={onAdicionar}>+</button>
    );
}