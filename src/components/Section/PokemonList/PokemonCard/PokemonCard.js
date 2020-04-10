import React, {useState, useEffect} from 'react'

const PokemonCard = (props) => {

    const [pokemon, setPokemon] = useState(null)

    function fetchPokemon(){
        fetch(`${props.pokeUrl}`)
        .then(response => response.json())
        .then(pokemon => setPokemon(pokemon))
      }

    useEffect(() => {
        fetchPokemon();
    }, []);

    return (
        <div className="col-sm-6 col-md-3 my-3">
            <div className="card">
                <div className="card-header">
                    {pokemon === null ? (
                        <h1>Trwa ładowanie pokemona</h1>
                    ) : ( <>
                        <h5>{pokemon.name}</h5>
                        <img src={pokemon.sprites.front_default} />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PokemonCard
