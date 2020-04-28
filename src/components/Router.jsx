import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MoodsList from './pageMood/MoodsList'
import pageResults from './pageResults/RecipesResults'
import Contact from './Contact'
import Header from './headerFooter/Header'
import Footer from './headerFooter/Footer'
import RecipeDetails from './pageRecipe/RecipeDetails'



const Router = () => {
    return (
        <>
        <Header />
        <Switch>
            <div className='routerLinks'>
                    <Route exact path ='/mood' component={MoodsList} />
                    <Route exact path ='/results' component={pageResults} />
                    <Route exact path ='/contact' component={Contact} />
                    <Route path='/results/:id' component={RecipeDetails} />
            </div>
        </Switch>
        <Footer />
        </>
        
        )
};

export default Router