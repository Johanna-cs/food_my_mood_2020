import React from 'react'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function TypeOfMeal (props) {
    
    const meals = [
        {
            type: "Collation / En-cas",
            selected: false
        },
        {
            type: "Plats",
            selected: false
        }
    ]
    
   return(

    <div>
    

        <div className="typeOfMeal">
        {meals.map(typeofmeal => (
            
            <Button key={typeofmeal.type} style={{ backgroundColor: '#FEBE40' }} size="lg">{typeofmeal.type}</Button>)
        )}
        </div>
    </div>

   )
}


export default TypeOfMeal;