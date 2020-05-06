import React from 'react'


const SimilarRecipes = (props) => {


    return(
        <>

        <h1>{props.label}</h1>
        <img src={props.image} alt={props.label}></img>
        {/* <p>{props.time}</p> */}
        <p>{props.time === 0 ? 'Instantané !' : props.time} {props.time > 0 ? 'minutes' : ''}</p>

        </>

    )
}


export default SimilarRecipes