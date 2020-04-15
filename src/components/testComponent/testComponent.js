
import React, {useState, useEffect} from 'react'

const TestComponent = () => {

    const [searchedPokemonArray, setSearchedPokemonArray] = useState([])

    const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=1000`

    function fetchAllPokemon(api){
        fetch(api)           
        .then(response => response.json())
        .then(pokemonObj => {
            if(pokemonObj.types[0].type.name==="poison") {
                setSearchedPokemonArray(prevState => [...prevState, pokemonObj])
            }
        })
    }

    useEffect(() => {
        for(let i=1; i<800; i++) {
            const pokeApi = `https://pokeapi.co/api/v2/pokemon/${i}`
            fetchAllPokemon(pokeApi)
    
        }
        console.log(searchedPokemonArray)
    }, [])
    console.log(searchedPokemonArray)
    return <div>
        <h1>sprawdz logi</h1>
    </div>

}

export default TestComponent