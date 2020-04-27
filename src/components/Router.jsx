import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MoodsList from './pageMood/MoodsList'
import pageResults from './pageResults/RecipesResults'
import Contact from './Contact'
import Header from './headerFooter/Header'
import Footer from './headerFooter/Footer'
import PreferencesList from './pageSelect/PreferencesList'



const Router = () => {
    return (
        <>
        <Header />
        <Switch>
            <div className='routerLinks'>
                    <Route exact path ='/mood' component={MoodsList} />
                    <Route exact path ='select' component={PreferencesList} />
                    <Route exact path ='/results' component={pageResults} />
                    <Route exact path ='/contact' component={Contact} />
            </div>
        </Switch>
        <Footer />
        </>
        
        )
};

export default Router