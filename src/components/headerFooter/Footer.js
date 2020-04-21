import React from 'react-dom';
import { NavLink } from "react-dom";



const Footer = (props) => {
    return (
    <div id='Footer'>
<ul className='Footer'>

    <li><NavLink activeClassName="selected" to="./src/components/pageMood">Mood</NavLink></li>
    <li><NavLink activeClassName="selected" to="./src/components/Contact">Contact</NavLink></li>
    <li><NavLink activeClassName="selected" to="./src/components/AboutUs">About Us</NavLink></li>
    
</ul> 
    </div>
    )}

export default Footer;