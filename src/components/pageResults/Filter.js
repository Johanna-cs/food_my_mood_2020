import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './Filter.css'


const API_ID = 'e9275ee4'
const API_KEY = 'bda40244157a76f38fd5f51e25675359'

function Filter (props){
    const [search, setSearch] = useState('')
    const [dietLabels, setDietLabels] = useState(props.dietLabels)
    const [concentration, setConcentration] = useState(props.dietLabels === "low-fat" ? true : false)
    const [sportif, setSportif] = useState(props.dietLabels === "high-protein" ? true : false)
    const [stresse, setStresse] = useState(props.dietLabels === "low-carb" ? true : false)
    const [fatigue, setFatigue] = useState(props.dietLabels === "balanced" ? true : false)


        return (
            <>
            <div className='filterBar'>
                <h3 id='filterTitle'>Filters</h3>
 {/* search bar  */}
                <div className='searchBar'>
                    <label className='filterLabel' htmlFor='searchBar'>Search</label>
                    <div>
                    <input id='searchBarInput' type="text" placeholder= "Enter an ingredient" onChange={ e => setSearch (e.target.value)}/>
                        <button onClick={()=> props.changeQuery(search)} id='searchBarBtn' >Ok</button>
                    </div>
                </div>
                </div>
                
            <div className="selectBox" >
                <div className="selectMood">
                <label className='filterLabel' htmlFor='moodsSelect'>Mood</label>
                    <div className="moodType" >
                        <input
                            type="checkbox"
                            defaultChecked={concentration}
                            onChange={(e) => setConcentration(e.target.checked)}
                            />                      
                       <label className='moodType'>Concentrated</label>
                    </div>

                    <div className="moodType" >
                        <input
                            type="checkbox"
                            defaultChecked={sportif}
                            onChange={(e) => setSportif(e.target.checked)}
                        />
                        <label className='moodType'>Sport</label>
                    </div>

                    <div className="moodType" >
                        <input
                            type="checkbox"
                            defaultChecked={stresse}
                            onChange={(e) => setStresse(e.target.checked)}
                        />
                        <label className='moodType'>Stressed</label>
                    </div>

                    <div className="moodType" >
                        <input
                            type="checkbox"
                            defaultChecked={fatigue}
                            onChange={(e) => setFatigue(e.target.checked)}
                        />
                        <label className='moodType'>Tired</label>
                    </div>

                </div>
            
            
 {/* check box Select Preferencies  */}
                <div className="selectPreferencies">
                <label className='filterLabel' htmlFor='prefSelect'>Preferencies</label>
                    <div className="prefType" >
                        <input
                            type="checkbox"
                            defaultChecked={props.healthLabels === undefined}
                            // onChange={this.handleChangeSansPreference}
                        />
                        <label className='prefType'>All </label>
                    </div>
                    <div className="prefType" >
                        <input
                            type="checkbox"
                            defaultChecked={props.healthLabels === "vegetarian"}
                            // onChange={this.handleChangeVegetarien}
                        />
                        <label className='prefType'>Veggie </label>
                    </div>
                    <div className="prefType" >
                        <input
                            type="checkbox"
                            defaultChecked={props.healthLabels === "vegan"}
                            // onChange={this.handleChangeVegan}
                        />
                        <label className='prefType'>Vegan </label>
                    </div>
                    
                    <Link to ={{pathname: '/results',
                                newMood : concentration ? 'low-fat' : sportif ? 'high-protein' : stresse ? 'low-carb' : 'balanced' }}>
                        <button className='selectBoxBtn'>Valid your choices</button>
                    </Link>
                </div>
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
            
        </>
        )
        
    }

export default Filter