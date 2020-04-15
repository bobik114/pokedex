import React, {useState, useEffect} from 'react'
import './PokemonCard.scss'

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

    function getImg(imgUrl) {
        if(imgUrl) {
            return imgUrl
        }
        else {
            return "https://pngimg.com/uploads/pokeball/pokeball_PNG8.png"
        }
    }

    const capitalizeFirstLetter = (str) => {
        return str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str
      }

    return (
        <div className="col-sm-6 col-md-3 my-3" onClick={handleClickPokemon}>
            <div className="card">
                    {pokemon === null ? (
                        <h5>Trwa ładowanie pokemona</h5>
                    ) : (<>
                            <div className="card-header">
                                <h5>{capitalizeFirstLetter(pokemon.name)}</h5>
                            </div>
                            <div className="card-body">
                                <img alt="#" src={getImg(pokemon.sprites.front_default)} />
                            </div>
                        </>
                    )}
            </div>
        </div>
    )
}

export default PokemonCard
