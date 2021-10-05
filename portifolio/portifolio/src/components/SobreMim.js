import React from 'react';
import { Link } from 'react-router-dom';
import react from '../reactJS.png';
/* import React, { useContext } from 'react';
import Context from '../context/Context'; */

function PaginaInicial() {

    /* const { name } = useContext(Context); */
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
        <Link to="/projects">
          <button
            className="botao"
            type="button"
            >
            <p className="text-button">Projetos</p>
          </button>
        </Link>
        <h1 className="sobre-mim">Sobre mim</h1>
        <h4 className="texto-sobre-mim">Nasci em Itapeva, uma cidade do interior de São Paulo, mas atualmente moro em Valinhos/SP.
        <br/>Estou mudando de área, da educação como professora de história, para a área de desenvolvimento web.
        <br/>Atualmente estudo na Trybe, e em breve me formarei como desenvolvedora full stack.
        </h4>
        <h1 className="habilidades">Minhas Habilidades</h1>
        <img src={react} alt="logo-react" className="react-img"></img>
      </div>
    )
}

export default PaginaInicial;