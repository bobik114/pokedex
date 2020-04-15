import React, {useState, useEffect} from 'react'
import PokemonCard from './PokemonCard/PokemonCard'
import ReactPaginate from 'react-paginate'
import './PokemonList.scss'

let limit = 20;
const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=1000`
const apiUrlLimit = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=`

const PokemonList = (props) => {

    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(1)
    const [pokemons, setPokemons] = useState(null)
    const [allPokemons, setAllPokemons] = useState(null)
    const [pagiOff, setPagiOff] = useState(false)

    const input = React.createRef()

    function fetchPokemon(){
        fetch(apiUrlLimit + (currentPage * limit))           //wrzucanie odpowiedniej strony paginacji (ustawianie offsetu)
        .then(response => response.json())
        .then(pokeList => {
            setPokemons(pokeList.results)             //ustanawianie zbioru pokemonów (na cele wyrenderowania mapy pokemonow)
            setPageCount(Math.ceil(pokeList.count/limit))
        })
    }
    
    function fetchAllPokemon(){
        fetch(apiUrl)           
        .then(response => response.json())
        .then(pokeList => {
            setAllPokemons(pokeList.results)
            setPageCount(Math.ceil(pokeList.results.length / limit))         
        })
    }

    useEffect(() => {
        fetchAllPokemon()
    
    }, []);
      
    useEffect(() => {
        fetchPokemon()
    }, [currentPage]);

    const setPage = (e) => {
        setCurrentPage(e.selected)                   //ustanawianie aktualnej strony przy kliknieciu na element paginacji
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.current.value !== "") {
            if (!pokemons) return;
            const valueReg = new RegExp(`w*${input.current.value}w*`, 'i');
            const pokemonsFiltered = allPokemons.filter(pokemon => {
                return valueReg.test(pokemon.name)
            })
            console.log(pokemons)
            setPokemons(pokemonsFiltered)
            setPagiOff(true)
        }
        else {
            fetchPokemon()
            setPagiOff(false)
        }
    }

    return ( <>
        <div className="row justify-content-end my-2">
            <form onSubmit={handleSubmit} className="form-inline">
                <input type="text" className="form-control" ref={input} />
                <input type="submit" className="btn btn-secondary" value="Search" />
            </form>
        </div>
        <div className="row">
            {pokemons === null ? (
                <h1>Trwa ładowanie pokemonów</h1>
            ) : (
                <>{pokemons.map((e, i)=> <PokemonCard pokemons={pokemons} clickPokemon={props.clickPokemon} key={i} pokeUrl={e.url} />)}</>
            )}
        </div>
        <div className="row">
            <nav aria-label="Page navigation example" className="mx-auto">
                {pagiOff ? (null):(
                    <ReactPaginate
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={setPage}
                        previousLabel={"previous"}
                        nextLabel={"next"}
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
                        activeClassName={"page-item active"}
                        />
                    )
                }
            </nav>
        </div>
    </>)
}

export default PokemonList
