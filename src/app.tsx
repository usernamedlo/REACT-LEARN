import React, { FunctionComponent, useEffect, useState } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';
import PokemonList from './pages/pokemon-list';
  
const App: FunctionComponent = () => {

 return (
    <PokemonList />
 )
}
  
export default App;