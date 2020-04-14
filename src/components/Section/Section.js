import React, {useState} from 'react'
import PokemonList from './PokemonList/PokemonList'
import Pokemon from './Pokemon/Pokemon'

const Section = () => {

    const [actualPokemon, setActualPokemon] = useState(null)
    const [pokemonSection, setPokemonSection] = useState(false)

    const clickPokemon = (pokemon) => {
        setActualPokemon(pokemon)
        setPokemonSection(true)
    }

    return (
        
            <>{pokemonSection ? (
            <Pokemon pokeObject={actualPokemon}/>
            ) : (
            <PokemonList clickPokemon={clickPokemon}/>
            )}
            </>
    )
}

export default Section
