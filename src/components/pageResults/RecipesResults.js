import React from 'react'
import Axios from 'axios'
import RecipeCard from './RecipeCard'
import './Results.css'
import Filter from './Filter'


const API_ID = '6b74c366'
const API_KEY = '4819294e40eaccde885e836d49f610d0'


class RecipesResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dietLabels : this.props.location.mood,
            healthLabels : this.props.location.preference,
            recipes : [], 
            query : '',
        }
    }

    componentDidMount() {
        this.getData()
    }
    
    componentDidUpdate(prevState) {
        if (prevState.query !== this.props.location.ingredient) {
            this.setState({query : this.props.location.ingredient}) 
            this.getData() }}
    

    getData = () => {
        this.state.query !== '' ?
        Axios
        .get(`https://api.edamam.com/search?q=${this.state.query}&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => this.setState({recipes : response.data.hits}))
        
        : this.state.healthLabels === undefined ?
        Axios
        .get(`https://api.edamam.com/search?q=&diet=${this.state.dietLabels}&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => this.setState({recipes : response.data.hits}))
        : Axios
        .get(`https://api.edamam.com/search?q=&diet=${this.state.dietLabels}&health=${this.state.healthLabels}&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => this.setState({recipes : response.data.hits}))
    
    }

    render(){ 
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

                <Filter />
            </div>
            </>
        )}
     }
    


export default RecipesResults