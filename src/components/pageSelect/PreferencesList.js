import React from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './PreferencesList.scss';


//const API_ID = '503bfcfa'
//const API_KEY = '5cc2b384fee6a8368c246c961db9d44b'



class PreferencesList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //nopref: 'noPrefSelected',
      vegetarian: 'vegetarian',
      vegan: 'vegan',
      mood: this.props.location.state
    };
   }

  render() {
    return (

      <div className='prefPage'>
          <div className="Preferences">

            <div>
              <Link to ={{pathname: "/results",
                          mood: this.state.mood }}>              
              <Button className='prefBtn' >All</Button>
              </Link>
            <div/>

            <div>
              <Link to ={{pathname: "/results",
                          mood: this.state.mood, 
                          preference: this.state.vegetarian }}>  
              <Button >Veggie</Button>
              </Link>
            </div>

            <div>
              <Link to ={{pathname: "/results",
                          mood: this.state.mood, 
                          preference: this.state.vegan }}>  
              <Button >Vegan</Button>
              </Link>
            </div>

            </div>
          </div>
      </div>
    );
  }
}


export default PreferencesList;