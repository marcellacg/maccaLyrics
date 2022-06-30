import React from "react";
import background from "../../images/imgmacca.png";
import { Navbar, NavItem, Icon} from 'react-materialize';

const Header = () => (
    <Navbar alignLinks="right" id="mobile-nav">

    <div class="items">
        <NavItem href=""> <img id="logo-nav" src={background} /> </NavItem>
        <NavItem href="">HOME</NavItem>
        <NavItem href="">CONTATO</NavItem>
    </div>
    <div>
      <input type="search" id="search-input" placeholder="Pesquisar"></input>
    </div>
   
  </Navbar>
);

export default Header;