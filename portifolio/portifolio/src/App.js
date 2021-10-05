import { Route, Switch } from 'react-router-dom';
import SobreMim from './components/SobreMim';
import PaginaInicial from './PaginaInicial';
import Projetos from './components/Projetos';
import './portifolio.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ PaginaInicial } />
        <Route exact path="/about" component={ SobreMim } />
        <Route exact path="/projects" component={ Projetos } />
      </Switch>
    </div>
  );
}

export default App;
