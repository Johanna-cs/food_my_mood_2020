import React from 'react'
import { Component } from 'react'
import besoinconcentration from './photos/cadre/besoinconcentration.png'
import fatigue from './photos/cadre/fatigue.png'
import stresse from './photos/cadre/stresse.png'
import { Link } from 'react-router-dom'
import './MoodList.css'




//const API_ID = 'b013cd2e'
//const API_KEY = 'b5866da13b7d6a2eac318c855012b15f'

class MoodList extends Component {
    constructor(props){
        super(props)
        this.state = {
          besoinconcentration : 'low-fat',
          sportif : 'high-protein',
          stresse : 'low-carb',
          fatigue : 'balanced',
        }
      }
      render (){
        return (
            <div className="moodList">
                <h2>Dites-moi votre humeur, je vous dirai quoi manger !</h2>
                <div className="cols">
                    <div className="col1">
                    <h1>Besoin de concentration</h1>
                        <Link to ={{pathname: '/select',
                                       state: this.state.besoinconcentration }}>
                            <img className="photos" src={besoinconcentration} alt="Besoin de concentration"/>
                        </Link>
                    <h1>Sportif</h1>
                        <Link to ={{pathname: '/select',
                                       state: this.state.sportif }}>
                            <img className="photos" src={sportif} alt="Sportif"/>
                        </Link>
                    </div>
                    <div className="col2">
                        <h1>Stressé</h1>
                            <Link to ={{pathname: '/select',
                                           state: this.state.stresse }}>
                                <img className="photos" src={stresse} alt="Stressé"/>
                            </Link>
                        <h1>Fatigué</h1>
                            <Link to ={{pathname: '/select',
                                           state: this.state.fatigue }}>
                                <img className="photos" src={fatigue} alt="Fatigué"/>
                            </Link>
                    </div>
                </div>
            </div>
        );
    }}
    export default MoodList;