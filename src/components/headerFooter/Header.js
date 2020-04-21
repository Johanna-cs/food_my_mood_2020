import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import chef from './chef.png'

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className='navbar'>
      <Navbar id='navBar' color="faded" dark>
      <img id='logoFMM' src={chef} alt='logo FmM'/>
        <NavbarBrand href="./home" className="foodmymood">Food My Mood </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="burgerMenu" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="./components/Contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./components/pageMood">Mood</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Header;