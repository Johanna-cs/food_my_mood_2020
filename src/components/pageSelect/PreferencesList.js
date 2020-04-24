import React from 'react'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';


const API_ID = '503bfcfa'
const API_KEY = '5cc2b384fee6a8368c246c961db9d44b'



class PreferencesList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collationSelected: false,
      platSelected: false,
      noPrefSelected : false,
      vegetarianSelected : false,
      vegetalianSelected : false,
     
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

//const validButton = {
//  if (this.state.collationSelected == true && this.state.noPrefSelected == true){
//    query = "snacking","drinking recipe";
//  } else if (this.state.collationSelected == true && this.state.vegetarianSelected == true){
//    query = "snacking", "drinking recipe", "vegetarian";
//  } else if (this.state.collationSelected == true && this.state.vegetarianSelected == true){
//    query = "snacking", "drinking recipe", "vegan";
//  } else if (this.state.platSelected == true && this.state.noPrefSelected == true){
//    query = !"snacking", !"drinking recipe";
//  } else if (this.state.platSelected == true && this.state.vegetarianSelected == true){
//    query = !"snacking", !"drinking recipe", "vegetarian";
// } else if (this.state.platSelected == true && this.state.vegetalianSelected == true){
//    query = "snacking", "drinking recipe", "vegan";
//  } else {
//    prompt ("Sélectionner vos préférences");
//  }
//  }
//  }

    return (

      <div>

        <div className="typeOfMeals">

          <Button onClick={event => {
            const newCollationSelected = !this.state.collationSelected;
            this.setState({ collationSelected: newCollationSelected });
          }}
            style={{ backgroundColor: this.state.collationSelected? '#3E4F59' : '#FEBE40' }}>Collation / En-cas</Button>

          <Button onClick={event => {
            const newPlatsSelected = !this.state.platSelected;
            this.setState({ platSelected: newPlatsSelected });
          }} style={{ backgroundColor: this.state.platSelected? '#3E4F59' : '#FEBE40' }}>Plats</Button>


        </div>

        <div className="Preferences">

          <Button onClick={event => {
            const newNoPrefSelected = !this.state.noPrefSelected;
            this.setState({ noPrefSelected: newNoPrefSelected });
          }}
            style={{ backgroundColor: this.state.noPrefSelected? '#3E4F59' : '#FEBE40' }}>Sans préférence</Button>


          <Button onClick={event => {
            const newVegeSelected = !this.state.vegetarianSelected;
            this.setState({ vegetarianSelected: newVegeSelected });
          }}
            style={{ backgroundColor: this.state.vegetarianSelected? '#3E4F59' : '#FEBE40' }}>Végétarien</Button>



          <Button onClick={event => {
            const newVeganSelected = !this.state.vegetalianSelected;
            this.setState({ vegetalianSelected: newVeganSelected });
          }}
            style={{ backgroundColor: this.state.vegetalianSelected? '#3E4F59' : '#FEBE40' }}>Végétalien</Button>


        </div>


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