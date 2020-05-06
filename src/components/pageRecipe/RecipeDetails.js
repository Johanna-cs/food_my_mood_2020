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
            recipes: this.props.location.recipes,
            id: this.props.match.params.id,
            uri : this.props.location.uri,
            similarRecipes : []
        }

    }

    componentDidMount() {
        this.getData()
        this.setState({ similarRecipes : this.getRandomSimilarRecipes(this.state.recipes.filter(recipe=> recipe.uri !== this.state.uri)) })

        
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.recipes !== this.state.recipes) {
    //         this.setState({recipes : this.props.location.recipes})
    //     }
    //   }
    
    getData = () => {
        Axios
        .get(`https://api.edamam.com/search?r=${this.state.query}&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => this.setState({recipe : response.data}))
    }

    getRandomSimilarRecipes = (recipes) => {
            // Generate shuffle array of recipes
            const shuffled = recipes.sort(() => 0.5 - Math.random());
            // Genereate sub-array of 3 elements after shuffled
            return shuffled.slice(0, 3);
    }


    render() {
        return (
            <>
            <body>
                {this.state.recipe.map(e=> (
                <div className='container' key={e.uri}>
                    <div className='recipe'>
                        <h4 className='recipe-title'>{e.label}</h4>
                        <div className='recipe-summary'>
                            <ul className='recipe-typology'>
                                {e.dietLabels.map(elt=> (
                                    <li key={elt}>{elt}</li>))}
                                    <li>Calories : {Math.round(e.calories)} cal</li>
                            </ul>
                            <img className='recipeImg' src={e.image} alt={e.label}></img>
                        </div>
                        <div className='recipeList'>
                            <p>Temps de préparation : <span> {e.totalTime === 0 ? 'Instantané !' : e.totalTime} {e.totalTime > 0 ? 'minutes' : ''}</span></p>
                            <p> Ingrédients :</p>
                            <ul>
                                {e.ingredients.map(ing=> (
                                    <li key={ing.text}>{ing.text}</li>))}
                            </ul>
                        </div>
                    </div>
                </div>
                ))}
                <div className='similSection'>
                    <h3>Vous pourriez aussi aimer les recettes suivantes :</h3>
                    <div className='similarrecipes'>
                        {this.state.similarRecipes.map(recipe => (
                                    <SimilarRecipes 
                                        label={recipe.label} 
                                        image={recipe.image} 
                                        time={recipe.totalTime}
                                        uri={recipe.uri}
                                        id = {this.state.id}
                                    />
                                    ))}
                                    
                                
                    </div>

                </div>

            </body>
            </>
        )
    }

}

export default RecipeDetails
