import React from 'react'


const SimilarRecipes = (props) => {


    return(
        <div className='similSection'>
            <div className='similRecipe'>
                <p className='similName '>{props.label}</p>
                <img className='similImg' src={props.image} alt={props.label}></img>
                {/* <p>{props.time}</p> */}
                <p className='similTime'>{props.time === 0 ? 'Instantané !' : props.time} {props.time > 0 ? 'minutes' : ''}</p>
            </div>
        </div>

    )
}


export default SimilarRecipes