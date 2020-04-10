import React from 'react'

const Pokemon = (props) => {

    console.log(props.pokeObject)
    return (
        <div className="card col-sm-12 col-md-6 my-3 mx-auto">
            <h5>{props.pokeObject.name}</h5>
            <img src={props.pokeObject.sprites.back_default} />
            <h5></h5>
        </div>
    )
}

export default Pokemon
