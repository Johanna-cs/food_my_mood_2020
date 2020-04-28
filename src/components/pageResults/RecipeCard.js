import React from 'react'
import './Results.css'

class RecipeCard extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
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
            </div>
        </>
        )
    }
}
export default RecipeCard
