import React from 'react'
import {Link} from 'react-router-dom'



const SimilarRecipes = (props) => {

    return(
        <div className='similSection'>
            <div className='similRecipe' key={props.id}>
            <img className='similImg' src={props.image} alt={props.label}></img>
                <p className='similName '>{props.label}</p>
                {/* <p className='similTime'>{props.time === 0 ? 'Instantané !' : props.time} {props.time > 0 ? 'minutes' : ''}</p> */}
                <Link to={{ 
                    pathname: `/results/${props.id}`,
                    recipes : props.recipes }}>
                    <button className='recipeButton'>Recipe</button>
                </Link>
            </div>
        </div>

    )
}


export default SimilarRecipes