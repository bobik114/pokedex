import React, {useState, useEffect} from 'react'

const PokemonCard = (props) => {

    const [pokemon, setPokemon] = useState(null)

    const fetchPokemon = () => {
        fetch(`${props.pokeUrl}`)
        .then(response => response.json())
        .then(pokemon => setPokemon(pokemon))
    }

    useEffect(() => {
        fetchPokemon()
    }, [props])

    const handleClickPokemon = () => {
        props.clickPokemon(pokemon)
    }

    return (
        <div className="col-sm-6 col-md-4 col-lg-3 my-3" onClick={handleClickPokemon}>
            <div className="card">
               
                    {pokemon === null ? (
                        <h5>Trwa ładowanie pokemona</h5>
                    ) : (<>
                            <div className="card-header">
                                <h5>{pokemon.name}</h5>
                            </div>
                            <div className="card-body">
                                <img src={pokemon.sprites.front_default} />
                            </div>
                        </>
                    )}
            </div>
        </div>
    )
}

export default PokemonCard
