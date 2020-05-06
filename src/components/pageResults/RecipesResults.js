import React from 'react'
import Axios from 'axios'
import RecipeCard from './RecipeCard'
import './Results.css'

const API_ID = '6b74c366'
const API_KEY = '4819294e40eaccde885e836d49f610d0'


class RecipesResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query : 'potatoes',
            recipes : []
        }
    }

    componentDidMount() {
        this.getData()
    }
    
    getData = () => {
        Axios
        .get(`https://api.edamam.com/search?q=${this.state.query}&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => this.setState({recipes : response.data.hits}))
    
    }
    render() {
        return (
            <>
            <div className='pageResults'>
                {/* <div className='filterBar'>
                    <Filter />
                </div> */}
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