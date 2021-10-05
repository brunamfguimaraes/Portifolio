import React from 'react';
import { Link } from 'react-router-dom';
import imagem from './brunaferreira.jpg';
import './portifolio.css';

class PaginaInicial extends React.Component {
  render() {
    return (
      <div>
        <Link to="/about">
          <button
            className="botao"
            type="button"
            >
            <p className="text-button">Sobre mim</p>
          </button>
        </Link>
        <Link to="/projects">
          <button
            className="botao"
            type="button"
            >
            <p className="text-button">Projetos</p>
          </button>
        </Link>
        <h1 className="h1">Olá, Sou Bruna Ferreira</h1>
          <h2 className="h2">DESENVOLVEDORA JÚNIOR FULL STACK</h2>
          <img src={imagem} alt="foto" className="foto"></img>
      </div>
    )
  }
}

export default PaginaInicial;