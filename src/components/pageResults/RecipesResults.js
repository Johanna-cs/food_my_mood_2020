import React from 'react'
import Axios from 'axios'
import RecipeCard from './RecipeCard'
import './Results.css'
i

const API_ID = '6b74c366'
const API_KEY = '4819294e40eaccde885e836d49f610d0'


class RecipesResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dietLabels : this.props.PreferencesList.mood,
            healthLabels : this.props.PreferencesList,
            recipe : []
        }
    }

    componentDidMount() {
        this.getData()
    }
    
    getData = () => {
        Axios
        .get(`https://api.edamam.com/search?q=${this.state.recipe}diet=${this.state.dietLabels}&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => this.setState({recipe : response.data.hits}))
    
    }
    render() {
        return (
            <>
            <div className='pageResults'>

                <div className='recipesresults'>
                        {this.state.recipe.map(recip => recip.recipe).map(e=> (
                            <RecipeCard 
                            label={e.label} 
                            image={e.image} 
                            time={e.totalTime} 
                            calories={e.calories}
                            uri={e.uri}
                            test='coucou' />
                        ))}
                </div>
            </div>
            </>
        )}
}

export default RecipesResults