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
      collationSelected: false,
      platSelected: false,
      disabledCollation: false,
      disabledPlat: false,
      noPrefSelected: false,
      vegetarianSelected: false,
      vegetalianSelected: false,
      disabledNoPref: false,
      disabledVegetarian: false,
      disabledVegan: false,
      mood : this.props.location.state
    };

    this.selectChoiceCollation = this.selectChoiceCollation.bind(this);
    this.selectChoicePlat = this.selectChoicePlat.bind(this);
    this.selectPrefNo = this.selectPrefNo.bind(this)
    this.selectPrefVege = this.selectPrefVege.bind(this);
    this.selectPrefVegan = this.selectPrefVegan.bind(this)
  }


  selectChoiceCollation = () => {
    const newCollationSelected = !this.state.collationSelected;
    this.setState({ collationSelected: newCollationSelected });
    this.setState({ disabledPlat: !this.state.disabledPlat })
  }

  selectChoicePlat = () => {
    const newPlatsSelected = !this.state.platSelected;
    this.setState({ platSelected: newPlatsSelected });
    this.setState({ disabledCollation: !this.state.disabledCollation })
  }

  selectPrefNo = () => {
    const newNoPrefSelected = !this.state.noPrefSelected;
    this.setState({ noPrefSelected: newNoPrefSelected });
    this.setState({ disabledVegetarian: !this.state.disabledVegetarian});
    this.setState({ disabledVegan: !this.state.disabledVegan})
  }

  selectPrefVege = () => {
    const newVegeSelected = !this.state.vegetarianSelected;
    this.setState({vegetarianSelected: newVegeSelected });
    this.setState({disabledNoPref: !this.state.disabledNoPref});
    this.setState({disabledVegan: !this.state.disabledVegan});
  }

  selectPrefVegan = () => {
    const newVeganSelected = !this.state.vegetalianSelected;
    this.setState({vegetalianSelected: newVeganSelected });
    this.setState({disabledNoPref: !this.state.disabledNoPref});
    this.setState({disabledVegetarian: !this.state.disabledVegetarian});
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
console.log(this.state.mood)
    // const validButton = {
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

          <Button className="Collation"
            onClick={this.selectChoiceCollation}
            disabled={this.state.disabledCollation}
            style={{ backgroundColor: '#FEBE40'}} > Collation / En-cas <br />Recettes</Button>

          <Button className="Plats"
            onClick={this.selectChoicePlat}
            disabled={this.state.disabledPlat}
            style={{ backgroundColor: '#FEBE40' }}> Plats <br />Recettes</Button>


        </div>

        <div className="Preferences">

          <Button onClick={this.selectPrefNo}
          disabled={this.state.disabledNoPref}
          style={{ backgroundColor: '#72CDBC' }}>Sans préférence</Button>


          <Button onClick={this.selectPrefVege}
          disabled={this.state.disabledVegetarian}
          style={{ backgroundColor: '#72CDBC' }}>Végétarien</Button>


          <Button onClick={this.selectPrefVegan}
          disabled={this.state.disabledVegan}
          style={{ backgroundColor: '#72CDBC' }} >Végétalien</Button>


        </div>


        <div className="validButton">
          <Link to="/results">
            <Button id="Valid">Valider</Button></Link>
        </div>


        <div className="skipButton">
          <Link to="/results"><Button id="skipBtn">Passer cette étape</Button></Link>
        </div>

      </div>
    );
  }
}



export default PreferencesList;