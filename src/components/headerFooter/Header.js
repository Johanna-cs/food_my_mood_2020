import React, { useState } from 'react';
import { NavLink as NavLinkTest } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from './logo.png'


//Navbar Food my Mood, avec logo et router vers les trois pages
const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)
  return (
    <div className='navbar'>
      <Navbar id='navBar' color="faded" dark>
      <img id='logoFMM' src={logo} alt='logo FmM'/>
        <NavbarBrand href="/" className="foodmymood">Food My Mood </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="burgerMenu" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={NavLinkTest}  to="/">Mood</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={NavLinkTest}to="/results">Results</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={NavLinkTest} to="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Header;