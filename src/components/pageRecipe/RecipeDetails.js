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
            recipes: this.props.location.recipes,
            id: this.props.match.params.id,
            uri : this.props.location.uri,
            recipe : [],
            similarRecipes : [],
            loaded : false
        }
    }

    componentDidMount() {
        this.getData()
        this.setState({ similarRecipes : this.getRandomSimilarRecipes(this.state.recipes.filter(recipe=> recipe.uri !== this.state.uri)) })
        // this.dataStored()
      }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.id !== this.state.id) {
            this.getData()
            this.setState({ similarRecipes : this.getRandomSimilarRecipes(this.state.recipes.filter(recipe=> recipe.uri !== this.state.uri)) })  
            // this.GetDataStored()   
        };
    }

    getData = () => {
        const query = `http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${this.state.id}`;

        Axios
        .get(`https://api.edamam.com/search?r=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => this.setState({recipe : response.data}))
        .catch(error => alert(error))
        .finally(this.setState({ loaded : true }))
    }

    getRandomSimilarRecipes = (recipes) => {
            // Generate shuffle array of recipes
            const shuffled = recipes.sort(() => 0.5 - Math.random());
            // Genereate sub-array of 3 elements after shuffled
            return shuffled.slice(0, 3);
    }

    extractIdFromUri = (uri) => {
        return uri.split('#recipe_').pop()
    }

    refreshRecipeDetails = (newId) => {
        this.setState({ id : newId })
    }
    
    // dataStored = () => {
    //     sessionStorage.setItem('id', '58')
    // }

    // getDataStored = () => {
    //     console.log(sessionStorage.getItem('id', '58'))
    // }

    render() {
        return (
            <>
                        {this.state.recipe.map(e=> (
                        <div className='container' key={e.uri}>
                            <div className='recipe'>
                                <h3 className='recipe-title'>{e.label}</h3>
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
                                    <a rel="noopener noreferrer" href={this.state.recipe[0].url} target="_blank"><button>Accéder à la recette complète</button></a>
                            </div>
                        </div>
                        ))}
                        <div className='similSection'>
                            
                            <h3>Vous pourriez aussi aimer les recettes suivantes :</h3>
                            <div className='similarrecipes'>
                                {this.state.similarRecipes.map(recipe => (
                                            <div key={recipe.uri} onClick={() => this.refreshRecipeDetails(this.extractIdFromUri(recipe.uri))}><SimilarRecipes 
                                                label={recipe.label} 
                                                image={recipe.image} 
                                                time={recipe.totalTime}
                                                id = {this.extractIdFromUri(recipe.uri)}
                                                recipes = {this.state.recipes}
                                            />
                                            </div>
                                            ))}                
                            </div>

                        </div>

            </>
        )
    }

}

export default RecipeDetails
