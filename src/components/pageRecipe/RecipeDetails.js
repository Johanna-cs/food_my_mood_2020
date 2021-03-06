import React from 'react'
import Axios from 'axios'
import SimilarRecipes from './SimilarRecipes'
import './RecipeDetails.scss'


const API_ID = '6b74c366'
const API_KEY = '4819294e40eaccde885e836d49f610d0'

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
            <div className='pageDetails'>
                
                        {this.state.recipe.map(e=> (
                        <div className='recipe' key={e.uri}>
                            <div className='container'>
                                <h3 className='recipe-title'>{e.label}</h3>
                                <div className='recipe-summary'>
                                    <ul className='recipe-typology'>
                                        {e.dietLabels.map(elt=> (
                                            <p key={elt}>{elt}</p>))}
                                            <p>Calories : {Math.round(e.calories)} cal</p>
                                        <p>Diet info :</p>{e.healthLabels.map(el => 
                                        <li key={el}>{el} </li>)}
                                    </ul>
                                    <img className='recipeImg' src={e.image} alt={e.label}></img>
                                </div>
                                <div className='recipeList'>
                                    <p>Timing : </p> <li> {e.totalTime === 0 ? 'Instantané !' : e.totalTime} {e.totalTime > 0 ? 'minutes' : ''}</li>
                                    <p> Ingredients :</p>
                                    <ul>
                                        {e.ingredients.map(ing=> (
                                            <li key={ing.text}>{ing.text}</li>))}
                                    </ul>
                                
                                
                                    <a rel="noopener noreferrer" href={this.state.recipe[0].url} target="_blank">
                                        <button  className='goRecipe'>Get the complete recipe</button></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        <div className='similSection'>
                            
                            <h3 className='similPageTitle'>You will also love it :</h3>
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

            </div>
        )
    }

}

export default RecipeDetails
