import React, {useState, useEffect} from 'react'
import PokemonCard from './PokemonCard/PokemonCard'

let offset = 0;

const PokemonList = (props) => {

    const [limit, setLimit] = useState(16)
    const [apiUrl, setApiUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=16&offset=0`)
    const [allPokemon, setAllPokemon] = useState(null)
    
    const previous = () => {
        offset-=16
        setApiUrl(`https://pokeapi.co/api/v2/pokemon?limit=16&offset=${offset}`)
    }
    const next = () => {
        offset+=16
        setApiUrl(`https://pokeapi.co/api/v2/pokemon?limit=16&offset=${offset}`)
        console.log(offset)
    }

    function fetchPokemon(){
        fetch(apiUrl)
        .then(response => response.json())
        .then(pokeList => setAllPokemon(pokeList.results))
    }
      
    useEffect(() => {
        fetchPokemon()
    }, [apiUrl]);

    return ( <>
        <div className="row">
            {allPokemon === null ? (
                <h1>Trwa ładowanie pokemonów</h1>
            ) : (
                <>{allPokemon.map((e, i)=> <PokemonCard clickPokemon={props.clickPokemon} key={i} pokeUrl={e.url} />)}
                    <nav aria-label="Page navigation example" className="mx-auto">
                        <ul className="pagination">
                        <li className="page-item"><button onClick={previous} className="page-link">Previous</button></li>
                        <li className="page-item"><button onClick={next} className="page-link">Next</button></li>
                        </ul>
                    </nav>
                </>
            )}
        </div>
    </>)
}

export default PokemonList
