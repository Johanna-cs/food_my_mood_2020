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
                <h3>Filters</h3>
{/* search bar */}
                <div className="searchBar">
                    <input type="text" 
                        placeholder= "Search" 
                        onChange={ e => this.setState (
                            {
                               search : e.target.value
                            }
                            )}/>

                    <Link to ={{pathname: '/results',
                                   ingredient: this.state.search }}>
                        <button>Valider</button>
                    </Link> 
                </div>

{/* check box Moods */}
                <div className="selectMoods">

                    <p>Moods</p>

                    <label className="besoindeconcentration" >
                        <input
                            type="checkbox"
                            checked={this.props.dietLabels === "low-fat"}
                            onChange={this.handleChangeConcentration}
                        />
                        Besoin de concentration
                    </label>
                

                    <label className="sportif" >
                        <input
                            type="checkbox"
                            checked={this.props.dietLabels === "high-protein"}
                            onChange={this.handleChangeSportif}
                        />
                        Sportif
                    </label>

                    <label className="stresse" >
                        <input
                            type="checkbox"
                            checked={this.props.dietLabels === "low-carb"}
                            onChange={this.handleChangeStresse}
                        />
                        Stressé
                    </label>

                    <label className="fatigue" >
                        <input
                            type="checkbox"
                            checked={this.props.dietLabels === "balanced"}
                            onChange={this.handleChangeFatigue}
                        />
                        Fatigué
                    </label>

                </div>
        
                <div className="selectPreferencies">

                    <p>Preferencies</p>

                    <label className="sanspreference" >
                        <input
                            type="checkbox"
                            checked={this.props.healthLabels === undefined}
                            onChange={this.handleChangeSansPreference}
                        />
                        Sans préférence
                    </label>
                

                    <label className="vegetarien" >
                        <input
                            type="checkbox"
                            checked={this.props.healthLabels === "vegetarian"}
                            onChange={this.handleChangeVegeyarien}
                        />
                        Végétarien
                    </label>

                    <label className="vegan" >
                        <input
                            type="checkbox"
                            checked={this.props.healthLabels === "vegan"}
                            onChange={this.handleChangeVegan}
                        />
                        Végan
                    </label>

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
