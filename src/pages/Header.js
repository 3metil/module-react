import React from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Products from './Products'
import Basket from './Basket'


const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          <Col sm={10}>
          <h1 className="logo">PIZZA-HOUSE</h1>
          </Col>
          <Col sm={2}>
      
      <Nav className = {"header__nav"}>
      <Nav.Item as="li">
      <Link to='/'>Home</Link>
      </Nav.Item>
      <Nav.Item as="li">
      <Link to='/add'>Add Card</Link>
      </Nav.Item>

    </Nav>
          </Col>  
        </Row>
    </Container>

    </header>
  );
};

export default Header;