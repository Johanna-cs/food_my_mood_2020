import React from 'react'
import Axios from 'axios'
import RecipeCard from './RecipeCard'
import './Results.css'
import MoodList from '../pageMood/MoodList'

const API_ID = '6b74c366'
const API_KEY = '4819294e40eaccde885e836d49f610d0'


class RecipesResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dietLabels : this.props.location.mood,
            healthLabels : this.props.location.preference,
            recipes : []
        }
    }

    componentDidMount() {
        this.getData()
    }
    
    getData = () => {
        
        this.state.healthLabels === '' ?
        Axios
        .get(`https://api.edamam.com/search?q=&diet=${this.state.dietLabels}&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => this.setState({recipe : response.data.hits}))
        : Axios
        .get(`https://api.edamam.com/search?q=&diet=${this.state.dietLabels}&health=${this.state.healthLabels}&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => this.setState({recipe : response.data.hits}))
    
    }
    render() {
        return (
            <>
            <div className='pageResults'>

                <div className='recipesresults'>
                        {this.state.recipes.map(recip => recip.recipe).map(e=> (
                            <RecipeCard 
                            label={e.label} 
                            image={e.image} 
                            time={e.totalTime} 
                            calories={e.calories}
                            uri={e.uri}
                            recipes={this.state.recipes.map(recipe=>recipe.recipe)} />
                        ))}
                </div>
            </div>
            </>
        )}
}

export default RecipesResults