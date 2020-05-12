import React from 'react'
import Axios from 'axios'
import RecipeCard from './RecipeCard'
import Filter from './Filter'
import Loader from 'react-loader'
import './Results.css'


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
            loaded : false,
        }

        // this.getFilter = this.getFilter.bind(this)
    }

    componentDidMount() {
        setTimeout(() => this.getData(), 1000)
        this.getData()
        
    }
    
    componentDidUpdate(prevState) {
        if (prevState.query !== this.props.location.ingredient) {
            this.setState({query : this.props.location.ingredient}) 
            this.getData() };      
        }
    

    getData = () => {
        this.state.query !== '' ?
        Axios
        .get(`https://api.edamam.com/search?q=${this.state.query}&health=alcohol-free&excluded=tea&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => this.setState({recipes : response.data.hits}))
        .finally(this.setState({ loaded : true }))
        
        : this.state.healthLabels === undefined ?
        Axios
        .get(`https://api.edamam.com/search?q=&diet=${this.state.dietLabels}&health=alcohol-free&excluded=tea&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => this.setState({recipes : response.data.hits}))
        .finally(this.setState({ loaded : true }))

        : Axios
        .get(`https://api.edamam.com/search?q=&diet=${this.state.dietLabels}&health=${this.state.healthLabels}&health=alcohol-free&excluded=tea&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => this.setState({recipes : response.data.hits}))
        .finally(this.setState({ loaded : true }))
    
    }

    // getFilter = () => {
    //     return <Filter />
    // }

    render(){ 
        return (

            <Loader loaded={this.state.loaded} lines={13} length={20} width={10} radius={30}
                        corners={1} rotate={0} direction={1} color="#000" speed={1}
                        trail={60} shadow={false} hwaccel={false} className="spinner"
                        zIndex={2e9} scale={1.00}
                        loadedClassName="loadedContent">

                {this.state.loaded === true && (
                
                <div className='pageResults'>

                    <Filter />

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
                                
                </div>) 
                }

            </Loader>
        )}
     }
    


export default RecipesResults