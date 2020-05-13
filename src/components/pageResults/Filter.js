import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search : '',
            dietLabels : this.props.dietLabels,
            concentration  : this.props.dietLabels === "low-fat" ? true : false,
            sportif : this.props.dietLabels === "high-protein" ? true : false,
            stresse : this.props.dietLabels === "low-carb" ? true : false,
            fatigue : this.props.dietLabels === "balanced" ? true : false,
            test : "coucou"

        }}

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
                            checked={this.state.concentration}
                            onChange={(e) => this.setState({concentration : e.target.checked})}
                            />                      
                       <label className='moodType'>Concentrated</label>
                    </div>

                    <div className="moodType" >
                        <input
                            type="checkbox"
                            checked={this.state.sportif}
                            onChange={(e) => this.setState({sportif : e.target.checked})}
                        />
                        <label className='moodType'>Sport</label>
                    </div>

                    <div className="moodType" >
                        <input
                            type="checkbox"
                            checked={this.state.stresse}
                            onChange={(e) => this.setState({stresse : e.target.checked})}
                        />
                        <label className='moodType'>Stressed</label>
                    </div>

                    <div className="moodType" >
                        <input
                            type="checkbox"
                            checked={this.state.fatigue}
                            onChange={(e) => this.setState({fatigue : e.target.checked})}
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
                            onChange={this.handleChangeVegetarien}
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
                    
                    <Link to ={{pathname: '/results',
                                newMood : this.state.concentration ? 'low-fat' : this.state.sportif ? 'high-protein' : this.state.stresse ? 'low-carb' : 'balanced' }}>
                        <button>Valid your choices</button>
                    </Link>

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
