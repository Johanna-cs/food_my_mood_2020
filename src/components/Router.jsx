import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MoodList from './pageMood/MoodList'
import pageResults from './pageResults/RecipesResults'
import Contact from './Contact'
import Header from './headerFooter/Header'
import Footer from './headerFooter/Footer'
import PreferencesList from './pageSelect/PreferencesList'
import RecipeDetails from './pageRecipe/RecipeDetails'



const Router = () => {
    return (
        <>
        <Header />
        <Switch>
            <div className='routerLinks'>
                    <Route exact path ='/' component={MoodList} />
                    <Route exact path ='/select' component={PreferencesList} />
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