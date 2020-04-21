import React from 'react'
import {Switch, Route} from 'react-router-dom'
import MoodsList from './components/pageMood'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'
import Footer from './components/headerFooter'

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path '/components/pageMood' components={MoodsList} />
                <Route exact path '/components/Contact' components={Contact} />
                <Route exact path '/components/AboutUs' components={AboutUs} />
            </Switch>
        </>
        )
};

export default Router