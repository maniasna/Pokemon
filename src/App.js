import './App.css';
import logo from './img/logo.png';
import { useState, useEffect } from 'react';
import * as API from './services/pokemon';
import { Routes, Route } from 'react-router-dom';
import Pokedex from './componentes/pokedex';
import Mapa from './componentes/mapa';

function App() {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    API.getPokemons().then(setPokemon);
  }, [])
  return (
    <div className="App">
      <img className='centrado' src={logo} />
      <Routes>
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/mapa' element={<Mapa />} />
      </Routes>
    </div>
  );
}

export default App;
