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

      <div>
        <div className="Preferences">
          
          <Link to ={{pathname: "/results",
                      mood: this.state.mood }}>              
          <Button
          style={{ backgroundColor: '#72CDBC' }}>Sans préférence</Button>
          </Link>
          

          <Link to ={{pathname: "/results",
                      mood: this.state.mood, 
                      preference: this.state.vegetarian }}>  
          <Button 
          style={{ backgroundColor: '#72CDBC' }}>Végétarien</Button>
          </Link>

          <Link to ={{pathname: "/results",
                      mood: this.state.mood, 
                      preference: this.state.vegan }}>  
          <Button 
          style={{ backgroundColor: '#72CDBC' }} >Végétalien</Button>
          </Link>

        </div>
      </div>
    );
  }
}


export default PreferencesList;