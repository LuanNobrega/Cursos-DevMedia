import React from 'react';
import Capa from './componentes/topo/topo';
import Conteudo from '../src/componentes/Conteudo/index'
import Rodape from './componentes/Rodape/rodape'
import CSS from './App.css'

function App() {
  return (
    <div className="App">
      <Capa />
      <Conteudo />
      <Rodape />
    </div>
  );
}

export default App;
