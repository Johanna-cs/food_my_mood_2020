import React from 'react'
import {Link} from 'react-router-dom'
import './Results.scss'

class RecipeCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes : this.props.recipes,
            uri: this.props.uri,
            id : '',
        }
    }

    extractIdFromUri(uri) {
        return uri.split('#recipe_').pop()
    }

    componentDidMount() {
        const recipeId = this.extractIdFromUri(this.props.uri)
        this.setState({ id : recipeId })
    }

    render() {
        return (
        <>
            <div className='recipeCard'>
                <div className='recipeCardCard'>
                    <img className='recipePhoto' src={this.props.image} alt={this.props.label}></img>
                    <div className='recipeDetails'>
                        <p className='recipeTime'>{this.props.time === 0 ? 'Instant !' : this.props.time} {this.props.time > 0 ? 'minutes' : ''} </p>
                        <p className='recipeCal'>{Math.round(this.props.calories)} cal</p>
                    </div>
                </div>
                <h3 id='recipeName'>{this.props.label}</h3>
                <Link to={{ 
                    pathname: `/results/${this.state.id}`,
                    recipes : this.state.recipes }}>
                    <button className='recipeButton'>Recipe</button>
                </Link>
            </div>

        </>   
        )
    }  
}

export default RecipeCard
