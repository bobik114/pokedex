import React, {useState, useEffect} from 'react'
import PokemonCard from './PokemonCard/PokemonCard'

const PokemonList = () => {

    const [allPokemon, setAllPokemon] = useState(null)

    function fetchPokemon(){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
        .then(response => response.json())
        .then(pokeList => setAllPokemon(pokeList.results))
      }

    fetchPokemon()
      

    return (
        <div className="row mx-auto">
            {allPokemon === null ? (
                <h1>Trwa ładowanie pokemonów</h1>
            ) : (
                <div>{allPokemon.map((e, i)=> <h1>test</h1>)}</div>
            )}
            

        </div>
    )
}

export default PokemonList
