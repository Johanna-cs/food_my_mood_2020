import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Preferences(props) {
    const prefers = [
        {
            name: "Sans préférence",
            selected: false,
        },
        {
            name: "Végétarien",
            selected: false,
        },
        {
            name: "Végétalien",
            selected: false,
        }
    ]

    return (
        
        <div className="preferences">
            {prefers.map(preference =>(
            <Button key = {preference.name} style={{ backgroundColor: '#FEBE40' }}>{preference.name}</Button>
            ))}

       </div>

    );
}

export default Preferences;