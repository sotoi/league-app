import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import './NavBar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";

function NavBar() {
    return (
      
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
  
  <Container>
<Navbar.Brand  as ={Link} to="/">League of Legends</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link as={Link} to="/Champions">Champions</Nav.Link>
      <Nav.Link as={Link} to="/Maps">Maps</Nav.Link>
      <Nav.Link  as={Link} to ="/SummonerSpells">Summoner Spells</Nav.Link>   
    </Nav>
  </Navbar.Collapse>
  </Container>
  
</Navbar>
    )
}

export default NavBar
