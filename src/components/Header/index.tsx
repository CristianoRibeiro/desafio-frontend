import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
// import { Container } from './styles';

const Header: React.FC = () => {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Finanças</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/atendimento">Atendimento</NavLink>
            </NavItem>
            
          </Nav>
          
            
            <NavLink href="/" color="#fff">Sair</NavLink>
           

          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;