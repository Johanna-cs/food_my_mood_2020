import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MoodsList from './pageMood/MoodsList'
import pageResults from './pageResults/RecipesResults'
import PreferenceList from './pageSelect/PreferencesList'
import Contact from './Contact'
import Header from './headerFooter/Header'
import Footer from './headerFooter/Footer'
<<<<<<< HEAD
import RecipeDetails from './pageRecipe/RecipeDetails'
=======
import PreferencesList from './pageSelect/PreferencesList'
>>>>>>> ba20f81b81b7982dffe9311cf8d9f1f8b28983d3



const Router = () => {
    return (
        <>
<<<<<<< HEAD
        
        <Header />
        <Switch>
            <div className='routerLinks'>
                    <Route exact path ='/' component={MoodsList} />
                    <Route exact path ='/select' component={PreferenceList} />
                    <Route exact path ='/results' component={pageResults} />
                    <Route exact path ='/contact' component={Contact} />
                    <Route path='/results/:id' component={RecipeDetails} />
            </div>
        </Switch>
        <Footer />
=======
            <Header />
            <Switch>
                <div className='routerLinks'>
                    <Route exact path='/' component={MoodsList} />
                    <Route exact path='/select' component={PreferencesList} />
                    <Route exact path='/results' component={pageResults} />
                    <Route exact path='/contact' component={Contact} />


                </div>
            </Switch>
            <Footer />
>>>>>>> ba20f81b81b7982dffe9311cf8d9f1f8b28983d3
        </>

    )
};

export default Router