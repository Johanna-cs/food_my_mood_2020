import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search : '',
            dejaselectionne: false, 

            concentration : this.props.dietLabels === "low-fat" ? true : false,
            sportif : this.props.dietLabels === "high-protein" ? true : false,
            stresse : this.props.dietLabels === "low-carb" ? true : false,
            fatigue : this.props.dietLabels === "balanced" ? true : false,
  
            sanspreference : this.props.healthLabels === "undefined" ? true : false,
            vegetarien : this.props.healthLabels === "vegetarian" ? true : false,
            vegan : this.props.healthLabels === "vegan" ? true : false,
        }}
    render() {
        return (
            <div className='filterBar'>
                <h3 id='filterTitle'>Filters</h3>
 {/* search bar  */}
                <div className='searchBar'>
                    <label className='filterLabel' htmlFor='searchBar'>Search</label>
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
                <label className='filterLabel' htmlFor='moodsSelect'>Mood</label>
                    <div className="moodType" >
                        <input
                            type="radio" name="Mood"
                            defaultChecked={this.state.concentration}
                            onChange={(e) => this.setState({concentration : e.target.checked})}
                            />
                       <label className='moodType'>Concentrated</label>
                    </div>
                    <div className="moodType" >
                        <input
                            type="radio" name="Mood"
                            defaultChecked={this.state.sportif}
                            onChange={() => this.setState({sportif : !this.state.sportif })}
                        />
                        <label className='moodType'>Sport</label>
                    </div>
                    <div className="moodType" >
                        <input
                            type="radio" name="Mood"
                            defaultChecked={this.state.stresse}
                            onChange={(e) => this.setState({stresse : e.target.checked})}
                        />
                        <label className='moodType'>Stressed</label>
                    </div>
                    <div className="moodType" >
                        <input
                            type="radio" name="Mood"
                            defaultChecked={this.state.fatigue}
                            onChange={(e) => this.setState({fatigue : e.target.checked})}
                        />
                        <label className='moodType'>Tired</label>
                    </div>
                </div>
 {/* check box Select Preferencies  */}
                <div className="selectPreferencies">
                <label className='filterLabel' htmlFor='prefSelect'>Preferencies</label>
                    <div className="prefType" >
                        <input
                            type="radio" name="Preferencies"
                            defaultChecked={this.state.sanspreference}
                            onChange={(e) => this.setState({sanspreference : e.target.checked})}
                        />
                        <label className='prefType'>All </label>
                    </div>
                    <div className="prefType" >
                        <input
                            type="radio" name="Preferencies"
                            defaultChecked={this.state.vegetarien}
                            onChange={(e) => this.setState({vegetarien : e.target.checked})}
                        />
                        <label className='prefType'>Veggie </label>
                    </div>
                    <div className="prefType" >
                        <input
                            type="radio" name="Preferencies"
                            defaultChecked={this.state.vegan}
                            onChange={(e) => this.setState({vegan : e.target.checked})}
                        />
                        <label className='prefType'>Vegan </label>
                    </div>
        
                    <Link to ={{pathname: '/results',                                
                               newMood : this.state.concentration ? 'low-fat' : this.state.sportif ? 'high-protein' : this.state.stresse ? 'low-carb' : 'balanced' }}>
                            <button>Valid your choices</button>
                    </Link>


                </div>
                <div className='filterTime'>
                    <label className='filterLabel' htmlFor="Timing">Timing</label>
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