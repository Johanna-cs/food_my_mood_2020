import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar id='navbar' color="faded" light>
      <img id='logoFMM' src='./src/chef.png' alt='logo FmM'/>
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