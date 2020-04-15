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
    const handleClickBack = () => {
        setPokemonSection(false)
    }

    return (
        <>{pokemonSection ? ( 
            <>
                <Pokemon pokeObject={actualPokemon} clickBack={handleClickBack}/>
                <button className="btn btn-primary" onClick={handleClickBack}>Go Back to Pokemon List</button>
            </>
            ) : (
            <PokemonList clickPokemon={clickPokemon}/>
            )}
        </>
    )
}

export default Section
