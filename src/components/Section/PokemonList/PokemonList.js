import React, {useState, useEffect} from 'react'
import PokemonCard from './PokemonCard/PokemonCard'
import ReactPaginate from 'react-paginate'
import './PokemonList.scss'

let limit = 24;
const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=`

const PokemonList = (props) => {

    const [currentPage, setCurrentPage] = useState(0);
    const [count, setCount] = useState(0)
    const [pageCount, setPageCount] = useState(null)
    const [allPokemon, setAllPokemon] = useState(null)

    function fetchPokemon(){
        fetch(apiUrl + (currentPage * limit))           //wrzucanie odpowiedniej strony paginacji (ustawianie offsetu)
        .then(response => response.json())
        .then(pokeList => {
            setCount(pokeList.count)                    //ustanawianie liczby pokemonów (na cele paginacji)
            setAllPokemon(pokeList.results)             //ustanawianie zbioru pokemonów (na cele wyrenderowania mapy pokemonow)
            setPageCount(Math.ceil(pokeList.count/limit))
        })
    }
      
    useEffect(() => {
        fetchPokemon()
    }, [currentPage]);

    const setPage = (e) => {
        setCurrentPage(e.selected)                   //ustanawianie aktualnej strony przy kliknieciu na element paginacji
    }

    const getPagination = () => {                       //funkcja tworząca i mapująca paginację pod stroną AKTUALNIE NIEUŻYWANA
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
                    
                </>
            )}
        </div>
        <div className="row">
            <nav aria-label="Page navigation example" className="mx-auto">
                <ReactPaginate
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={setPage}
                    previousLabel={"poprzednia"}
                    nextLabel={"następna"}
                    breakLabel={"..."}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    nextClassName={"page-item next-item"}
                    nextLinkClassName={"page-link"}
                    previousClassName={"page-item prev-item"}
                    previousLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"page-item active"}/>
            </nav>
        </div>
    </>)
}

export default PokemonList
