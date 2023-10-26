
import './App.css'
import { PokemonList } from './components/pokemon-list/pokemon-list';
import { Search } from './components/search/search';
import { PokemonCard } from './components/pokemon-card/pokemonCard';
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState('');

  return (
    <div>
      <PokemonCard search ={search}></PokemonCard>
      <Search setSearch={setSearch}></Search>
      <PokemonList></PokemonList>
    </div>
  )
}

export default App;