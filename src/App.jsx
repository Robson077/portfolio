import React from 'react';

import './App.css';

import Header from './components/header/Header';
import Sobre from './components/sobre/Sobre';
import Skills from './components/skills/Skills';
import Projetos from './components/projetos/Projetos';
import Contato from './components/contato/Contato';

function App() {
  return (
    <div className="App">
      <Header />

      <Sobre />

      <Skills />

      <Projetos />

      <Contato />
    </div>
  );
}

export default App;
