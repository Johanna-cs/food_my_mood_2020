import React, { useState } from 'react';
import './Filter.css'


function Filter (props){
    const [search, setSearch] = useState('')
   
    const [concentration, setConcentration] = useState(props.mood === "low-fat" ? true : false)
    const [sportif, setSportif] = useState(props.mood === "high-protein" ? true : false)
    const [stresse, setStresse] = useState(props.mood === "low-carb" ? true : false)
    const [fatigue, setFatigue] = useState(props.mood === "balanced" ? true : false)
    
    const [nopref, setNopref] = useState(props.preferencies === undefined ? true : false)
    const [vegetarian, setVegetarian] = useState(props.preferencies === "vegetarian" ? true : false)
    const [vegan, setVegan] = useState(props.preferencies === "vegan" ? true : false)


        return (
            <div className='filterBar'>
                <h3 id='filterTitle'>Filters</h3>
 {/* search bar  */}
                <div className='searchBar'>
                    <label className='filterLabel' htmlFor='searchBar'>Search</label>
                    <div>
                    <input id='searchBarInput' type="text" placeholder= "Enter an ingredient" onChange={ e => setSearch (e.target.value)}/>
                        <button id='searchBarBtn' onClick={()=> {
                            props.changeQuery(search); 
                            props.changeMood(concentration ? 'low-fat' : sportif ? 'high-protein' : stresse ? 'low-carb' : 'balanced');
                            props.changePreference(nopref ? undefined : vegetarian ? 'vegetarian' : 'vegan')} }
                        >
                            Ok
                        </button>
                    </div>
                </div>
                
                <div className='selectBox'>
{/* check box Moods */}
                <div className="selectMood">
                <label className='filterLabel' htmlFor='moodsSelect'>Mood</label>
                    <div className="moodType" >
                        <input
                            type="radio"
                            id="concentration"
                            value="concentration"
                            name="mood"
                            defaultChecked={concentration}
                            onChange={() => {setConcentration(!concentration); setSportif(concentration); setStresse(concentration); setFatigue(concentration)} }
                            />                      
                       <label className='moodType' htmlFor="concentration">Concentrated</label>
                    </div>

                    <div className="moodType" >
                        <input
                            type="radio"
                            id="sportif"
                            value="sportif"
                            name="mood"
                            defaultChecked={sportif}
                            onChange={() => {setSportif(!sportif); setConcentration(sportif); setStresse(sportif); setFatigue(sportif)} }
                        />
                        <label className='moodType' htmlFor="sportif">Sport</label>
                    </div>

                    <div className="moodType" >
                        <input
                            type="radio"
                            id="stresse"
                            value="stresse"
                            name="mood"
                            defaultChecked={stresse}
                            onChange={() => {setStresse(!stresse); setConcentration(stresse); setSportif(stresse); setFatigue(stresse)} }
                        />
                        <label className='moodType' htmlFor="stresse">Stressed</label>
                    </div>

                    <div className="moodType" >
                        <input
                            type="radio"
                            id="tired"
                            value="tired"
                            name="mood"
                            defaultChecked={fatigue}
                            onChange={() => {setFatigue(!fatigue); setConcentration(fatigue); setSportif(fatigue); setStresse(fatigue)} }
                        />
                        <label className='moodType' htmlFor="tired">Tired</label>
                    </div>

                </div>
            
            
 {/* check box Select Preferencies  */}
                <div className="selectPreferencies">
                <label className='filterLabel' htmlFor='prefSelect'>Preferencies</label>
                    <div className="prefType" >
                        <input
                            type="radio"
                            id="nopref"
                            value="nopref"
                            name="preftype"
                            defaultChecked={nopref}
                            onChange={() => {setNopref(!nopref); setVegetarian(nopref); setVegan(nopref)} }
                        />
                        <label className='prefType'>All </label>
                    </div>
                    <div className="prefType" >
                        <input
                            type="radio"
                            id="vegetarian"
                            value="vegetarian"
                            name="preftype"
                            defaultChecked={vegetarian}
                            onChange={() => {setVegetarian(!vegetarian); setNopref(vegetarian); setVegan(vegetarian)} }
                        />
                        <label className='prefType'>Veggie </label>
                    </div>
                    <div className="prefType" >
                        <input
                            type="radio"
                            id="vegan"
                            value="vegan"
                            name="preftype"
                            defaultChecked={vegan}
                            onChange={() => {setVegan(!vegan); setNopref(vegan); setVegetarian(vegan)} }
                        />
                        <label className='prefType'>Vegan </label>
                    </div>
                    
                        <button className='selectBoxBtn' onClick={() => {
                            props.changeMood(concentration ? 'low-fat' : sportif ? 'high-protein' : stresse ? 'low-carb' : 'balanced');
                            props.changePreference(nopref ? undefined : vegetarian ? 'vegetarian' : 'vegan');
                            props.changeQuery(search)} }
                            >
                            Valid your choices
                        </button>
                </div>
            </div>

 {/* Timing  */}
                <div className='filterTime'>
                    <label className='filterLabel' htmlFor="Timing">Timing</label>
                    <form className='timing'>
                            <select type="select" className="timing" id="mySelect" onChange={(e) => props.filterOnTiming(e.target.value)}>
                                <option value={10}>10min</option>
                                <option value={30}>30min</option>
                                <option value={45}>45min</option>
                                <option value={60}>1h </option>
                                <option value={120}>2h</option>
                            </select>
                    </form>
                </div>

            </div>  
        
        )
    
    }

export default Filter