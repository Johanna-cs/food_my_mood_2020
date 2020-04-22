import React from 'react'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import TypeOfMeal from './TypeOfMeal';
import Preferences from './Preferences'


const API_ID = '503bfcfa'
const API_KEY = '5cc2b384fee6a8368c246c961db9d44b'



class PreferencesList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };

  }

  // componentDidMount() {
  //  this.getSelected();
  // }

  //getSelected() {
  //Axios.get(`https://api.edamam.com/search?q=${this.state.query}&app_id=${API_ID}&app_key=${API_KEY}`)
  //.then(response => response.data)
  //.then(data => {
  //  this.setState ({
  //  query : data.hits[0]
  // })
  // })



  render() {
    return (

      <div>
        <TypeOfMeal />
        <Preferences />

        <div className="validButton">
          <Button outline color="warning">Valider</Button>{' '}
        </div>
        <div className="skipButton">
          <Button outline color="warning">Passer cette étape</Button>{' '}
        </div>

      </div>
    );
  }
}






export default PreferencesList;