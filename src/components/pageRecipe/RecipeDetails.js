import React from 'react'
import Axios from 'axios'
import SimilarRecipes from './SimilarRecipes'
import './RecipeDetails.css'

const API_ID = 'e9275ee4'
const API_KEY = 'bda40244157a76f38fd5f51e25675359'

class RecipeDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            query : `http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${this.props.match.params.id}`,
            recipe : [],
            id: this.props.match.params.id
        }

    }

    componentDidMount() {
        this.getData()
        
    }
    
    getData = () => {
        Axios
        .get(`https://api.edamam.com/search?r=${this.state.query}&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => this.setState({recipe : response.data}))
    }


    render() {
        return (
            <>
            <body>
                {this.state.recipe.map(e=> (
    
                <div className='container' key={e.uri}>
                    
                    <div className='recipe'>

                        <h1 className='recipe-title'>{e.label}</h1>
                        
                        <div className='recipe-summary'>

                            <ul className='recipe-typology'>
                                {e.dietLabels.map(elt=> (
                                    <li key={elt}>{elt}</li>))
                                }
                                    <li>Calories : {Math.round(e.calories)} cal</li>
                            </ul>

                            <img src={e.image} alt={e.label}></img>

                        </div>

                        <h5>Temps de préparation : {e.totalTime === 0 ? 'Instantané !' : e.totalTime} {e.totalTime > 0 ? 'minutes' : ''}</h5>
                        
                        
                        <h6>Ingrédients :</h6>
                        <ul>
                            {e.ingredients.map(ing=> (
                                <li key={ing.text}>{ing.text}</li>
                            ))}
                        </ul>

                    </div>

                </div>

                ))}

                <h3>Vous pourriez aussi aimer les recettes suivantes :</h3>

                <SimilarRecipes />

            </body>
            </>
        )
    }

}

export default RecipeDetails
