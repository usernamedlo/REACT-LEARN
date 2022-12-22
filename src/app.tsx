import React, { FunctionComponent, useEffect, useState } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';
  
const App: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);
        

 return (
    <div>
        <h1>Pokédex</h1>
        <p>Il y a {pokemons.length} Pokemons. </p>
    </div>
 )
}
  
export default App;