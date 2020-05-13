import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search : '',
            concentration : this.props.dietLabels === "low-fat" ? true : false,
            sportif : this.props.dietLabels === "high-protein" ? true : false,
            stresse : this.props.dietLabels === "low-carb" ? true : false,
            fatigue : this.props.dietLabels === "balanced" ? true : false,

            sanspreference : this.props.healthLabels === "undefined" ? true : false,
            vegetarien : this.props.healthLabels === "vegetarian" ? true : false,
            vegan : this.props.healthLabels === "vegan" ? true : false,
        }
        
    }
 
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

{/* check box Moods */}

                <div className="selectMoods">
                <label className='filterLabel' for="CheckBox">Moods</label>

                    <div className="besoindeconcentration" >

                        

                        <div>
                          <input type="radio" id="bt1" name="drone" value="bt1"
                          checked={this.state.concentration}
                          onChange={(e) => this.setState({concentration : e.target.checked})}
                          />
                          <label for="dewey">Besoin de concentration</label>
                        </div>

                        <div>
                          <input type="radio" id="bt2" name="drone" value="bt2"
                                 checked={this.state.sportif}
                                 onChange={(e) => this.setState({sportif : e.target.checked})}
                                 />
                          <label for="huey">Sportif</label>
                        </div>
                        
                        <div>
                          <input type="radio" id="bt3" name="drone" value="bt3"
                                 checked={this.state.stresse}
                                 onChange={(e) => this.setState({stresse : e.target.checked})}
                                 />
                          <label for="huey">Stressé</label>
                        </div>

                        <div>
                          <input type="radio" id="bt4" name="drone" value="bt4"
                                 checked={this.state.fatigue}
                                 onChange={(e) => this.setState({fatigue : e.target.checked})}
                                 />
                          <label for="huey">Fatigué</label>
                        </div>

                </div>
            
              
            
 {/* check box Select Preferencies  */}
                <div className="selectPreferencies">
                <label className='filterLabel' for="CheckBox">Preferencies</label>


                    <div>
                      <input type="radio" id="bt5" name="preferencies" value="bt5"
                             checked={this.state.sanspreference}
                             onChange={(e) => this.setState({sanspreference : e.target.checked})}
                             />
                      <label for="huey">Sans préférence</label>
                    </div>
                        
                    <div>
                      <input type="radio" id="bt6" name="preferencies" value="bt6"
                             checked={this.state.vegetarien}
                             onChange={(e) => this.setState({vegetarien : e.target.checked})}
                             />
                      <label for="huey">Végétarien</label>
                    </div>

                    <div>
                      <input type="radio" id="bt7" name="preferencies" value="bt7"
                             checked={this.state.vegan}
                             onChange={(e) => this.setState({vegan : e.target.checked})}
                             />
                      <label for="huey">Végan</label>
                    </div>
        
                    <Link to ={{pathname: '/results',                                
                               newMood : this.state.concentration ? 
                               'low-fat' : this.state.sportif ? 'high-protein' : this.state.stresse ? 'low-carb' : 'balanced' }}>
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
            </div> 
        </div> 
            
        )
    }
 
}

export default Filter
