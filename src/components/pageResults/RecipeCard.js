import React from 'react'
import {Link} from 'react-router-dom'

class RecipeCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id : ''
        }
    }

    extractIdFromUri(uri) {
        return uri.split('#recipe_').pop()
    }

    componentDidMount() {
        const recipeId = this.extractIdFromUri(this.props.uri)
        this.setState({id : recipeId})
    }

    render() {
        return (
        <>
            <div className='card-list'>
                <h1>{this.props.label}</h1>
                <img src={this.props.image} alt={this.props.label}></img>
                <h5>Temps de préparation : {this.props.time === 0 ? 'Instantané !' : this.props.time} {this.props.time > 0 ? 'minutes' : ''}</h5>
                <h6>Nombre de calories : {Math.round(this.props.calories)}</h6>
                <Link 
                    to={{ pathname: `/results/${this.state.id}` }}>
                    <button>Go Recipe</button>
                </Link>
            </div>
        </>   
        )
    }  
}

export default RecipeCard
