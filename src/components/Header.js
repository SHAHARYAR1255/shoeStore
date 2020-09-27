import React, { useState } from 'react';
import './Header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import {NavLink} from 'react-router-dom';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light className="header__navbar" expand="md">
        <NavbarBrand href="#"><span><sup>shoes for everyfoot</sup></span></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="header__nav" navbar>
            <NavItem className="nav__navitem">
              <NavLink className="nav-link" to='/'><h6>Home</h6></NavLink>
            </NavItem>
            <NavItem className="nav__navitem">
              <NavLink className="nav-link" to='/store'><h6>Store</h6></NavLink>
            </NavItem>
            <NavItem className="nav__navitem">
              <NavLink className="nav-link" to="/about"><h6>About</h6></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="home">
<div className="container">
          <div className="row row-header">
                  <div className="col-12">
                     <h1><i>BATA</i></h1>
                        <p>Provides Best quality shoes to everyone. All of our products are available in every size and almost in every color</p>
                  </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Header;