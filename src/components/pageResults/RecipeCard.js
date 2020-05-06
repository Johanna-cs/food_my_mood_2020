import React from 'react'
import {Link} from 'react-router-dom'
import './Results.css'

class RecipeCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes : this.props.recipes,
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
                <h3 className='recipeName'>{this.props.label}</h3>
                <img className='recipePhoto' src={this.props.image} alt={this.props.label}></img>
                <div className='recipeDetails'>
                  <p className='recipeTime'>Temps de préparation : {this.props.time === 0 ? 'Instantané !' : this.props.time} {this.props.time > 0 ? 'minutes' : ''}</p>
                  <p className='recipeCal'> Nombre de calories : {Math.round(this.props.calories)}</p>
                </div>
                <Link to={{ 
                    pathname: `/results/${this.state.id}`,
                    recipes : this.state.recipes }}>
                    <button>Go Recipe</button>
                </Link>
            </div>

        </>   
        )
    }  
}

export default RecipeCard
