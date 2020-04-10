import React, {useState, useEffect} from 'react'
import PokemonCard from './PokemonCard/PokemonCard'

const PokemonList = () => {

    const [limit, setLimit] = useState(20)
    const [offset, setOffset] = useState(0)
    const [apiUrl, setApiUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    const [allPokemon, setAllPokemon] = useState(null)

    console.log(apiUrl.count)

    function fetchPokemon(){
        fetch(apiUrl)
        .then(response => response.json())
        .then(pokeList => setAllPokemon(pokeList.results))
      }

    useEffect(() => {
        fetchPokemon();
    }, []);

    return ( <>
        <div className="row">
            {allPokemon === null ? (
                <h1>Trwa ładowanie pokemonów</h1>
            ) : (
                <>{allPokemon.map((e, i)=> <PokemonCard key={i} pokeUrl={e.url} />)}</>
                
            )}
        </div>
        <div className="row">
            {allPokemon === null ? (null) : (
                <nav aria-label="Page navigation example" className="mx-auto">
                    <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            )}
        </div>
    </>)
}

export default PokemonList
