import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import RecipeCard from './RecipeCard'
import Filter from './Filter'
import './Results.css'
import Loader from 'react-loader'

const API_ID = 'b013cd2e'
const API_KEY = 'b5866da13b7d6a2eac318c855012b15f'


function RecipesResults(props) {
    const [dietLabels, setDietLabels] = useState(props.location.mood)
    const [healthLabels, setHealthLabels] = useState(props.location.preference)
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [timing, setTiming] = useState(undefined)
    const [peanutfree, setPeanutfree] = useState(false)
    const [treenutfree, setTreenutfree] = useState(false)



    const changeQuery = (query) => {
        setQuery(query)
    }

    const changeMood = (mood) => {
        setDietLabels(mood)
    }

    const changePreference = (pref) => {
        setHealthLabels(pref)
    }

    const filterOnTiming = (time) => {
        setTiming(time)
    }

    const filterOnPeanut = (value) => {
        setPeanutfree(value)
    }

    const filterOnTreenut = (value) => {
        setTreenutfree(value)
    }
 
    useEffect(() => {
       const getData = () => {

        query !== '' ?
        Axios
        .get(`https://api.edamam.com/search?q=${query}&health=alcohol-free&excluded=tea&excluded=cream&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => setRecipes(response.data.hits))
        .finally(()=> setLoaded(true))

        : query !== '' & healthLabels !== undefined ?
        Axios
        .get(`https://api.edamam.com/search?q=${query}&health=${healthLabels}&health=alcohol-free&excluded=tea&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => setRecipes(response.data.hits))
        .finally(()=> setLoaded(true))

        : query !== '' & healthLabels !== undefined & dietLabels !== undefined ?
        Axios
        .get(`https://api.edamam.com/search?q=${query}&health=${healthLabels}&diet=${dietLabels}&health=alcohol-free&excluded=tea&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => setRecipes(response.data.hits))
        .finally(()=> setLoaded(true))

        : healthLabels === undefined ?
        Axios
        .get(`https://api.edamam.com/search?q=&diet=${dietLabels}&health=alcohol-free&excluded=tea&excluded=cream&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => setRecipes(response.data.hits))
        .finally(()=> setLoaded(true))

        : Axios
        .get(`https://api.edamam.com/search?q=&diet=${dietLabels}&health=${healthLabels}&health=alcohol-free&excluded=tea&excluded=cream&app_id=${API_ID}&app_key=${API_KEY}`)
        .then(response => setRecipes(response.data.hits))
        .finally(()=> setLoaded(true))
       }; 
       
        getData();  
    }, [query, dietLabels, healthLabels])

  
        return (

            <Loader loaded={loaded} lines={13} length={20} width={10} radius={30}
                        corners={1} rotate={0} direction={1} color="#000" speed={1}
                        trail={60} shadow={false} hwaccel={false} className="spinner"
                        zIndex={2e9} scale={1.00}
                        loadedClassName="loadedContent">


                    <div className='pageResults'>

                {loaded && <Filter mood={dietLabels} preferencies={healthLabels} changeQuery={changeQuery} changeMood={changeMood} changePreference={changePreference} filterOnTiming={filterOnTiming} filterOnPeanut={filterOnPeanut} filterOnTreenut={filterOnTreenut}/>}

                        <div className='recipesresults'>
                            {timing === undefined ? 
                                recipes.map(recip => recip.recipe).map(e=> (
                                    <RecipeCard
                                    key={e.uri} 
                                    label={e.label} 
                                    image={e.image} 
                                    time={e.totalTime} 
                                    calories={e.calories}
                                    uri={e.uri}
                                    recipes={recipes.map(recipe=>recipe.recipe)} />
                                ))
                            : recipes.map(recip => recip.recipe).filter(e => e.totalTime <= timing).map(e=>(
                                    <RecipeCard
                                    key={e.uri} 
                                    label={e.label} 
                                    image={e.image} 
                                    time={e.totalTime} 
                                    calories={e.calories}
                                    uri={e.uri}
                                    recipes={recipes.map(recipe=>recipe.recipe)} />
                                ))
                            }
                        </div>
                                    
                    </div>
            
            </Loader>
        )
     
} 


export default RecipesResults