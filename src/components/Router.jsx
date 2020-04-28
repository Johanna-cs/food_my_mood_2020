import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MoodsList from './pageMood/MoodsList'
import pageResults from './pageResults/RecipesResults'
import PreferenceList from './pageSelect/PreferencesList'
import Contact from './Contact'
import Header from './headerFooter/Header'
import Footer from './headerFooter/Footer'



const Router = () => {
    return (
        <>
        <Header />
        <Switch>
            <div className='routerLinks'>
                    <Route exact path ='/' component={MoodsList} />
                    <Route exact path ='/select' component={PreferenceList} />
                    <Route exact path ='/results' component={pageResults} />
                    <Route exact path ='/contact' component={Contact} />
            </div>
        </Switch>
        <Footer />
        </>
        
        )
};

export default Router