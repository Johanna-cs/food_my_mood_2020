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
            stresse : false,


        
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
                //dietLabels : "low-fat" ? true : false
                concentration : e.target.checked
            })
                }
    
    handleChangeSportif = (e) => {
        this.setState (
            {   
                sportif : e.target.checked
            })}

    handleChangeConcentration = (e) => {  
        //this.props.dietLabels     
        this.setState (
            {   
                //dietLabels : "low-fat" ? true : false
                concentration : e.target.checked
            })
                }

    render() {

        return (
            
            <div className='filterBar'>
                <h3>Filters</h3>

 {/* search bar  */}

                <div className='searchBar'>
                    <label className='filterLabel' for='searchBar'>Search</label>
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
                

 {/* check box Moods  */}
                <div className="selectMoods">
                <label className='filterLabel' for="CheckBox">Moods</label>

                    <div className="besoindeconcentration" >
                        <input
                            type="checkbox"
                            checked={this.state.concentration } 
                            value = "low-fat"
                            onChange={this.handleChangeConcentration}
                            />                      
                       <label>Besoin de concentration</label>
                    </div>
                

                    <div className="sportif" >
                        <input
                            type="checkbox"
                            checked={this.props.dietLabels === "high-protein" ? true : false}
                            onChange={this.handleChangeSportif}
                        />
                        <label>Sportif</label>
                    </div>

                    <div className="stresse" >
                        <input
                            type="checkbox"
                            checked={this.state.stresse} //=== "low-carb"}
                            onChange={this.handleChangeStresse}
                        />
                        <label>Stressé</label>
                    </div>

                    <div className="fatigue" >
                        <input
                            type="checkbox"
                            checked={this.props.dietLabels === "balanced"}
                            onChange={this.handleChangeFatigue}
                        />
                        <label>Fatigué</label>
                    </div>

                </div>
            
            
 {/* check box Select Preferencies  */}
                <div className="selectPreferencies">
                <label className='filterLabel' for="CheckBox">Preferencies</label>

                    <p>Preferencies</p>

                    <div className="sanspreference" >
                        <input
                            type="checkbox"
                            checked={this.props.healthLabels === undefined}
                            onChange={this.handleChangeSansPreference}
                        />
                        <label>Sans préférence</label>
                    </div>
                
                    <div className="vegetarien" >
                        <input
                            type="checkbox"
                            checked={this.props.healthLabels === "vegetarian"}
                            onChange={this.handleChangeVegetarien}
                        />
                        <label>Végétarien</label>
                    </div>

                    <div className="vegetarien" >
                        <input
                            type="checkbox"
                            checked={this.props.healthLabels === "vegan"}
                            onChange={this.handleChangeVegan}
                        />
                        <label>Végan</label>
                    </div>
                    
                    <button>Valid your choices</button>

                </div>



{/* filter time */}
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
