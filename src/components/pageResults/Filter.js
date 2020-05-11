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
                    <input className='searchBarInput' type="text" placeholder= "Search" onChange={ e => this.setState (
                        {
                        search : e.target.value
                        }
                        )}/>

                    <Link to ={{pathname: '/results',
                                ingredient: this.state.search }}>
                        <button>Valider</button>
                    </Link> 
                </div>

                    
                <div className='filterTime'>
                    <form className='timing'>
                        <label id='timing' for="Timing">Timing</label>
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

//    {this.state.filterQueries.map(recip => recip.recipe).map(e=> (
            //        <RecipeCard 
            //        label={e.label} 
            //        image={e.image} 
            //        time={e.totalTime} 
            //        calories={e.calories}
            //        uri={e.uri}
            //        recipes={this.state.recipes.map(recipe=>recipe.recipe)}
            //        query={e.q} 
            //        />
            //    ))}

              //.search(e.target.value) }/>