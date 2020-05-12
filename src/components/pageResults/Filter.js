import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search : ""
        }
    }

    render() {

 //       const filterQueries = recipes.filter(query =>
 //           query.toLowerCase().includes (this.search.toLowerCase())
 //       )

        return (
            <>
            <div className='filterBar'>
                <h3>Filters</h3>
                
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
            </>
        )
    }

    
}

export default Filter
