import React, {useState, useEffect} from 'react'
import PokemonCard from './PokemonCard/PokemonCard'
import ReactPaginate from 'react-paginate'
import getType from '../../../functions/getType'
import './PokemonList.scss'

const PokemonList = (props) => {

    const types = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "physic", "ice", "dragon", "dark", "fairy"]
    let pokemonsConverted = []

    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0)
    const [limit, setLimit] = useState(8)
    const [pokemons, setPokemons] = useState(null)
    const [allPokemons, setAllPokemons] = useState(null)
    const [pagiOff, setPagiOff] = useState(false)
    const [pokemonsToConvert, setPokemonsToConvert] = useState(null)
    const [selectedType, setSelectedType] = useState(null)
    const [typedSearch, setTypedSearch] = useState("")

    const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=1000`
    const apiUrlLimit = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=`
    const apiType = `https://pokeapi.co/api/v2/type/${getType(selectedType)}`

    function fetchPokemon(){
        fetch(apiUrlLimit + (currentPage * limit))
        .then(response => response.json())
        .then(pokeList => {
            setPokemons(pokeList.results)           
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

    function fetchPokeType(){
        fetch(apiType)           
        .then(response => response.json())
        .then(pokemonType => {
            setPokemonsToConvert(pokemonType.pokemon)
        })
    }

    useEffect(() => {
        fetchAllPokemon()
    }, []);
      
    useEffect(() => {
        fetchPokemon()
    }, [currentPage, limit]);

    useEffect(() => {
        if(pokemonsToConvert) {
            for(const el of pokemonsToConvert) {
                pokemonsConverted = [...pokemonsConverted, el.pokemon] 
            }
            setPokemons(pokemonsConverted)
        }
    }, [pokemonsToConvert])

    useEffect(() => {
        if(selectedType) {
            fetchPokeType(apiType)
        }
    }, [selectedType])

    const handleChangeType = (event) => {
        setSelectedType(event.target.value)
        setPagiOff(true)
    }

    const handleChangeNumber = (event) => {
        setLimit(event.target.value)
    }

    const handleType = (event) => {
        setTypedSearch(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (typedSearch !== "") {
            if (!pokemons) return;
            const valueReg = new RegExp(`w*${typedSearch}w*`, 'i');
            const pokemonsFiltered = allPokemons.filter(pokemon => {
                return valueReg.test(pokemon.name)
            })
            setPokemons(pokemonsFiltered)
            setPagiOff(true)
        }
        else {
            fetchPokemon()
            setPagiOff(false)
        }
    }

    const setPage = (e) => {
        setCurrentPage(e.selected)                   
    }

    return ( <>
        <div className="row  my-2">
            <form onSubmit={handleSubmit} className="form-inline  col-xl-4 input-group my-1">
                <input onChange={handleType} type="text" className="form-control" value={typedSearch} />
                <input type="submit" className="btn btn-primary " value="Search" />
            </form>
            
            <form className="form-inline col-md-3 my-1">
                <label htmlFor="types" className="type-label">Type:</label>
                <select onChange={handleChangeType} id="types" className="form-control">
                    {types.map((el, i) => <option key={i} value={el}>{el}</option>)}
                </select>
            </form>
            {pagiOff ? (null):(
                <form className="form-inline col-md-5 my-1">
                    <label htmlFor="pokemons-per-page" className="per-page-label">Pokemons per page:</label>
                    <select onChange={handleChangeNumber} id="pokemons-per-page" className="form-control">
                        <option value={8}>8</option>
                        <option value={16}>16</option>
                        <option value={24}>24</option>
                        <option value={40}>40</option>
                        <option value={100}>100</option>
                    </select>
                </form>
            )}
        </div>
        <div className="row">
            {pokemons === null ? (
                <h1>Trwa ładowanie pokemonów</h1>
            ) : (
                <>{pokemons.map((e, i)=> <PokemonCard clickPokemon={props.clickPokemon} key={i} pokeUrl={e.url} />)}</>
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
