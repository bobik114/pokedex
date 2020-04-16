import React, {useState, useEffect} from 'react'
import capitalizeFirstLetter from '../../../functions/capitalizeFirstLetter'
import pokeballImg from '../../../assets/pokeball.png'

const Pokemon = (props) => {

    const [type, setType] = useState(null)

    useEffect(() => {
        
        setType([...props.pokeObject.types])
        
    }, [])

    function getImg(imgUrl) {
        if(imgUrl) {
            return imgUrl
        }
        else {
            return pokeballImg
        }
    }

    return <>
        <div className="row">
            <div className="col-12 col-md-10 my-5 mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h1 classname="m-0">{capitalizeFirstLetter(props.pokeObject.name)}</h1>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 mx-auto">
                            <img alt="#" src={getImg(props.pokeObject.sprites.front_default)} />
                        </div>
                        <div className="col-12 col-md-6 mx-auto">
                            <div className="row mx-5 my-2 mt-4 justify-content-center">
                                <h2>Data</h2>
                            </div>
                            <div className="row mx-5 my-2">
                                <div className="col-6">
                                    <h6 className="float-right">ID:</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="float-left">{props.pokeObject.id}</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="float-right">Height:</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="float-left">{props.pokeObject.height/10} m</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="float-right">Weight:</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="float-left">{props.pokeObject.weight/10} kg</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="float-right">Experience:</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="float-left">{props.pokeObject.base_experience} xp</h6>
                                </div>
                            </div>
                            <div className="row mx-5 my-2 justify-content-center">
                                <h2>Stats</h2>
                            </div>
                            <div className="row mx-5 my-1">
                                <div className="col-6">
                                    <h6 className="float-right">HP</h6>
                                </div>
                                <div className="col-6">
                                    <div className="progress">
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${props.pokeObject.stats[5].base_stat}%`,
                                            backgroundColor: `red`
                                            }}>
                                            <small>{props.pokeObject.stats[5].base_stat}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mx-5 my-1">
                                <div className="col-6">
                                    <h6 className="float-right">Attack</h6>
                                </div>
                                <div className="col-6">
                                    <div className="progress">
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${props.pokeObject.stats[4].base_stat}%`,
                                            backgroundColor: `red`
                                            }}>
                                            <small>{props.pokeObject.stats[4].base_stat}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mx-5 my-1">
                                <div className="col-6">
                                    <h6 className="float-right">Deffence</h6>
                                </div>
                                <div className="col-6">
                                    <div className="progress">
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${props.pokeObject.stats[3].base_stat}%`,
                                            backgroundColor: `red`
                                            }}>
                                            <small>{props.pokeObject.stats[3].base_stat}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mx-5 my-1">
                                <div className="col-6">
                                    <h6 className="float-right">Speed</h6>
                                </div>
                                <div className="col-6">
                                    <div className="progress">
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${props.pokeObject.stats[0].base_stat}%`,
                                            backgroundColor: `red`
                                            }}>
                                            <small>{props.pokeObject.stats[0].base_stat}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center mt-4">
                                <div className="container-type-box">
                                    {type === null ? (null):(type.map((el, i) => <div className={el.type.name + " type-box"}>{el.type.name}</div>))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Pokemon