import React, { Component } from 'react'


class Filter extends Component {

    render() {
        return (
            <>
            <div>
                <h3>Filters</h3>


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