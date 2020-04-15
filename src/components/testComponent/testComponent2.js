
import React, {useState, useEffect} from 'react'

const TestComponent2 = () => {

    const apiType = `https://pokeapi.co/api/v2/type/${6}`

    let pokemonsArr = []
    const [pokemonsBef, setPokemonsBef] = useState(null)

    function fetchAllPokemon(api){
        fetch(api)           
        .then(response => response.json())
        .then(pokemonType => {
            setPokemonsBef(pokemonType.pokemon)
        })
    }

    useEffect(() => {
        if(pokemonsBef) {
            for(const el of pokemonsBef) {
                pokemonsArr = [...pokemonsArr, el.pokemon] 
            }
            
            console.log(pokemonsArr)
        }
    }, [pokemonsBef])

    useEffect(() => {
        fetchAllPokemon(apiType)
    }, [])

    return <div>
        <h1>sprawdz logi</h1>
    </div>

}

export default TestComponent2