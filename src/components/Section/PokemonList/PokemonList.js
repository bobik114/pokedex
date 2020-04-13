import React, {useState, useEffect} from 'react'
import PokemonCard from './PokemonCard/PokemonCard'

let limit = 16;
const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=`

const PokemonList = (props) => {

    const [currentPage, setCurrentPage] = useState(0);
    const [count, setCount] = useState(0)
    const [allPokemon, setAllPokemon] = useState(null)
    
    const setPage = (e) => {
        setCurrentPage(e.target.name)
    }

    function fetchPokemon(){
        fetch(apiUrl + (currentPage * limit))
        .then(response => response.json())
        .then(pokeList => {
            setCount(pokeList.count)
            setAllPokemon(pokeList.results)
        })
    }
      
    useEffect(() => {
        fetchPokemon()
    }, [currentPage]);

    const getPagination = () => {
        const countItems = Math.ceil(count / limit);
        const result = [];
        for (let i=0; i < countItems; i++) {
            result.push(<li key={i} className="page-item"><button name={i} onClick={setPage} className="page-link">{i+1}</button></li>)
        }
        return result
     }

    return ( <>
        <div className="row">
            {allPokemon === null ? (
                <h1>Trwa ładowanie pokemonów</h1>
            ) : (
                <>{allPokemon.map((e, i)=> <PokemonCard clickPokemon={props.clickPokemon} key={i} pokeUrl={e.url} />)}
                    <nav aria-label="Page navigation example" className="mx-auto">
                        <ul className="pagination">
                            {getPagination()}
                        </ul>
                    </nav>
                </>
            )}
        </div>
    </>)
}

export default PokemonList
