import React, {useState, useEffect} from 'react'
import './PokemonCard.scss'
import capitalizeFirstLetter from '../../../../functions/capitalizeFirstLetter'
import pokeballImg from '../../../../assets/pokeball.png'

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
            return pokeballImg
        }
    }

    return (
        <div className="col-sm-6 col-lg-3 my-3" onClick={handleClickPokemon}>
            <div className="card pointer shadow">
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
