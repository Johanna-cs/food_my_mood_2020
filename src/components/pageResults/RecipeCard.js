import React from 'react'


class RecipeCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <>
            <div className='card-list'>
                <h1>{this.props.label}</h1>
                <img src={this.props.image} alt={this.props.label}></img>
                <h5>Temps de préparation : {this.props.time === 0 ? 'Instantané !' : this.props.time} {this.props.time > 0 ? 'minutes' : ''}</h5>
                <h6>Nombre de calories : {Math.round(this.props.calories)}</h6>
            </div>
        </>
            
        )
    }  
}

export default RecipeCard