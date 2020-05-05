import React, { useState, useEffect} from 'react'; 
import Axios from 'axios'
import RecipeCard from '../pageResults/RecipeCard'
const API_ID = '6b74c366'
const API_KEY = '4819294e40eaccde885e836d49f610d0'


const Fatigue = (props) => {
    const [query, setQuery] = useState ('')
    

    useEffect(() => {
        getData = () => {
            Axios
            .get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
            .then(response => setQuery({recipe : response.data.hits}))
        }
    })
        return (
            <>
                <div className='recipesresults'>
                        {this.recipe.map(recip => recip.recipe).map(e=> (
                            <RecipeCard 
                            label={e.label} 
                            image={e.image} 
                            time={e.totalTime} 
                            calories={e.calories}
                            uri={e.uri}
                            test='coucou' />
                        ))}
                </div>
            </>
        )}

export default Fatigue
