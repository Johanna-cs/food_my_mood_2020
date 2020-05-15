import React, { useState } from 'react';
import { NavLink as NavLinkTest } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from './logo2.png'


//Navbar Food my Mood, avec logo et router vers les trois pages
const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)
  return (
    <div>
      <Navbar id='navBar' color="faded" dark>
        <NavbarBrand href="/" className="foodmymoodLOGO">
          <img id='logoFMM' src={logo} alt='logo FmM'/>
        </NavbarBrand>
        {/* <NavbarToggler onClick={toggleNavbar} className="burgerMenu" />
        <Collapse isOpen={!collapsed} navbar> */}
          <Nav id='navMenu' navbar>
            <NavItem>
              <NavLink className='linkMenu' tag={NavLinkTest}  to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='linkMenu' tag={NavLinkTest}to="/results">Results</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='linkMenu' tag={NavLinkTest} to="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        {/* </Collapse> */}
      </Navbar>
    </div>
  );
}


export default Header;