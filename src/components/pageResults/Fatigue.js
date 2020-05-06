import React, { useState, useEffect} from 'react'; 
import Axios from 'axios'
import RecipeCard from '../pageResults/RecipeCard'


const API_ID = '6b74c366'
const API_KEY = '4819294e40eaccde885e836d49f610d0'


function Fatigue (props) {
    const [query, setQuery] = useState ({
        recipe: ''})
    
    

    useEffect(() => {
        getData () {
            Axios
            .get(`https://api.edamam.com/search?diet=${dietLabel}&app_id=${API_ID}&app_key=${API_KEY}`)
            .then(response => setQuery({recipe : response.data.hits}))
        }
    }
)
        return (
            <>
                <div className='recipesresults'>
                        {recipe.map(recip => recip.recipe).map(e=> (
                            <RecipeCard 
                                label={e.label} 
                                image={e.image} 
                                time={e.totalTime} 
                                calories={e.calories}
                                health={e.healthLabels}
                                diet={e.diet}
                                uri={e.uri}
                                test='coucou' />
                        ))}
                </div>
            </>
        )}

export default Fatigue