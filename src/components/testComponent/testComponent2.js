
import React, {useState, useEffect} from 'react'

const TestComponent2 = () => {

    const types = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "physic", "ice", "dragon", "dark", "fairy"]
    const getType = (type) => {
        switch (type) {
            case "normal":
                return 1
            case "fighting":
                return 2
            case "flying":
                return 3
            case "poison":
                return 4
            case "ground":
                return 5
            case "rock":
                return 6
            case "bug":
                return 7
            case "ghost":
                return 8
            case "steel":
                return 9
            case "fire":
                return 10
            case "water":
                return 11
            case "grass":
                return 12
            case "electric":
                return 13
            case "psychic":
                return 14
            case "ice":
                return 15
            case "dragon":
                return 16
            case "dark":
                return 17
            case "fairy":
                return 18
            default:
                return 1
        }
    }
    

    let pokemonsConverted = []
    const [pokemonsToConvert, setPokemonsToConvert] = useState(null)
    const [selectedType, setSelectedType] = useState(null)

    const apiType = `https://pokeapi.co/api/v2/type/${getType(selectedType)}`
    

    function fetchAllPokemon(api){
        fetch(api)           
        .then(response => response.json())
        .then(pokemonType => {
            setPokemonsToConvert(pokemonType.pokemon)
        })
    }

    useEffect(() => {
        if(pokemonsToConvert) {
            for(const el of pokemonsToConvert) {
                pokemonsConverted = [...pokemonsConverted, el.pokemon] 
            }
        }
    }, [pokemonsToConvert])

    useEffect(() => {
        fetchAllPokemon(apiType)
    }, [selectedType])


    const handleChange = (event) => {
        setSelectedType(event.target.value)
        console.log(pokemonsConverted)

    }

    return <div>
        <form>
            <label htmlFor="types">Choose a type:</label>
            <select onChange={handleChange} id="types" name="types" form="types">
                {types.map((el, i) => <option key={i} value={el}>{el}</option>)}
            </select>
        </form>
    </div>

}

export default TestComponent2