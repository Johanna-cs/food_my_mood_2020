import React from 'react'
import Axios from 'axios'
import RecipeCard from './RecipeCard'

const API_ID = 'e9275ee4'
const API_KEY = 'bda40244157a76f38fd5f51e25675359'


class RecipesResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query : 'chicken',
            recipe : []
        }
    }

    componentDidMount() {
        this.getData()
    }
    
    getData = () => {
        Axios
        .get(`https://api.edamam.com/search?q=${this.state.query}&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => this.setState({recipe : response.data.hits}))
    }
    render() {
        return (
            <>
                {this.state.recipe.map(recip => recip.recipe).map(e=> (
                    <RecipeCard 
                    label={e.label} 
                    image={e.image} 
                    time={e.totalTime} 
                    calories={e.calories} 
                    uri={e.uri}/>
                ))}            
            </>
        )}

}

export default RecipesResults