import React from 'react'
import { Component } from 'react'
import affame from './photos/cadre/affame.png'
import besoinconcentration from './photos/cadre/besoinconcentration.png'
import enerve from './photos/cadre/enerve.png'
import fatigue from './photos/cadre/fatigue.png'
import love from './photos/cadre/love.png'
import stresse from './photos/cadre/stresse.png'
import { Link } from 'react-router-dom'
import './MoodsList.css'
import Axios from 'axios';



//const API_ID = 'b013cd2e'
//const API_KEY = 'b5866da13b7d6a2eac318c855012b15f'

class MoodList extends Component {
    constructor(props){
        super(props)
        this.state = {
          affame : false,
          besoinconcentration : false,
          enerve : false,
          fatigue : false,
          love : false,
          stresse : false
        }
      }

 //   componentDidMount() {
 //       this.getData()

 //     }
//
 //   getData = () => {
 //       Axios.get(`https://api.edamam.com/search?q=${this.state.query}&app_id=${API_ID}&app_key=${API_KEY}`)
 //       .then(response => this.setState({recipe : response.data.hits}))
 //     }CV?preview=CV_O+Baveux.pdf

 //handleState = () => {
 //   this.setState ({ affame: false ? !false : false })
 //}
 //
 //onClick={this.handleState}
 
  
      render (){ 
        return (
            <div className="moodList">
                <h2>Dites-moi votre humeur, je vous dirai quoi manger !</h2>

                <div className="cols">
                 
                    <div className="col1">
                        <h1>Affamé</h1>
                        <Link to ={{pathname: '/select',
                                       state: this.state.affame }}>
                          
                            <img className="photos" src={affame} alt="Affamé"/>
                        </Link> 

                    <h1>Besoin de concentration</h1>
                        <Link to ={{pathname: '/select',
                                       state: this.state.besoinconcentration }}>
                            <img className="photos" src={besoinconcentration} alt="Besoin de concentration"/>
                        </Link> 
                    </div>

                    <div className="col2">
                        <h1>Enervé</h1>
                            <Link to ={{pathname: '/select',
                                           state: this.state.enerve }}>
                                <img className="photos" src={enerve} alt="Enervé"/>
                            </Link> 


                        <h1>Fatigué</h1>
                            <Link to ={{pathname: '/select',
                                           state: this.state.fatigue }}>
                                <img className="photos" src={fatigue} alt="Fatigué"/>
                            </Link> 
                    </div>

                    <div className="col3">
                        <h1>Love</h1>
                            <Link to ={{pathname: '/select',
                                           state: this.state.love }}>
                                <img className="photos" src={love} alt="Love"/>
                            </Link> 

                        <h1>Stressé</h1>
                            <Link to ={{pathname: '/select',
                                           state: this.state.stresse }}>
                                <img className="photos" src={stresse} alt="Stressé"/>
                            </Link> 
                    </div>
                </div>
            </div>
        );
    }}
  

    export default MoodList;


     
  


  
      
 
