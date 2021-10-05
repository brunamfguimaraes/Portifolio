import React from 'react';
import { Link } from 'react-router-dom';

class PaginaInicial extends React.Component {
  render() {
    return (
      <div>
         <Link to="/">
          <button
            className="botao"
            type="button"
            >
            <p className="text-button">Página Inicial</p>
          </button>
        </Link>
        <Link to="/about">
          <button
            className="botao"
            type="button"
            >
            <p className="text-button">Sobre mim</p>
          </button>
        </Link>
        <h1 className="h1">Meus projetos</h1>
      </div>
    )
  }
}

export default PaginaInicial;