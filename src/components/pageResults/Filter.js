import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search : "",
            dietLabels : this.props.dietLabels,
            concentration  : false,
            sportif : false,

        
        //    besoinconcentration : 'low-fat',
        //    sportif : 'high-protein',
        //    stresse : 'low-carb',
        //    fatigue : 'balanced',
            }
        }

        
    handleChangeConcentration = (e) => {  
        //this.props.dietLabels     
        this.setState (
            {   

                // concentration : e.target.checked,
            })
                }
    
    handleChangeSportif = (e) => {
        this.setState (
            {   
                sportif : e.target.checked
            })}


    render() {

        return (
            
            <div className='filterBar'>
                <h3 id='filterTitle'>Filters</h3>

 {/* search bar  */}

                <div className='searchBar'>
                    <label className='filterLabel' for='searchBar'>Search</label>
                    <div>
                    <input id='searchBarInput' type="text" placeholder= "Enter an ingredient" onChange={ e => this.setState (
                        {
                        search : e.target.value
                        }
                        )}/>
                    <Link to ={{pathname: '/results',
                                ingredient: this.state.search }}>
                        <button id='searchBarBtn'>Ok</button>
                    </Link>
                    </div>
                </div>
                

{/* check box Moods */}
                <div className="selectMood">
                <label className='filterLabel' for='moodsSelect'>Mood</label>
                    <div className="moodType" >
                        <input
                            type="checkbox"
                            checked={this.props.dietLabels === "low-fat"}
                            onChange={this.handleChangeConcentration}
                            />                      
                       <label className='moodType'>Concentrated</label>
                    </div>

                    <div className="moodType" >
                        <input
                            type="checkbox"
                            checked={this.props.dietLabels === "high-protein"}
                            onChange={this.handleChangeSportif}
                        />
                        <label className='moodType'>Sport</label>
                    </div>

                    <div className="moodType" >
                        <input
                            type="checkbox"
                            checked={this.props.dietLabels === "low-carb"}
                            onChange={this.handleChangeStresse}
                        />
                        <label className='moodType'>Stressed</label>
                    </div>

                    <div className="moodType" >
                        <input
                            type="checkbox"
                            checked={this.props.dietLabels === "balanced"}
                            onChange={this.handleChangeFatigue}
                        />
                        <label className='moodType'>Tired</label>
                    </div>

                </div>
            
            
 {/* check box Select Preferencies  */}
                <div className="selectPreferencies">
                <label className='filterLabel' for='prefSelect'>Preferencies</label>
                    <div className="prefType" >
                        <input
                            type="checkbox"
                            checked={this.props.healthLabels === undefined}
                            onChange={this.handleChangeSansPreference}
                        />
                        <label className='prefType'>All </label>
                    </div>
                    <div className="prefType" >
                        <input
                            type="checkbox"
                            checked={this.props.healthLabels === "vegetarian"}
                            onChange={this.handleChangeVegeyarien}
                        />
                        <label className='prefType'>Veggie </label>
                    </div>

                    <div className="prefType" >
                        <input
                            type="checkbox"
                            checked={this.props.healthLabels === "vegan"}
                            onChange={this.handleChangeVegan}
                        />
                        <label className='prefType'>Vegan </label>
                    </div>

                </div>


                <div className='filterTime'>
                    <label className='filterLabel' for="Timing">Timing</label>
                    <form className='timing'>
                            <select type="select" className="timing">
                            <option>10min</option>
                            <option>30min</option>
                            <option>45min</option>
                            <option>1h </option>
                            <option>2h +</option>
                            </select>
                    </form>
                </div>


        </div>  

        )
    }
 
}

export default Filter
