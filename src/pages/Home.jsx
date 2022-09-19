import React from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Home.scss'

const Home = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col sm={10}>
                        <h1 className="logo">наша продукция</h1>
                    </Col>
                    <Col sm={2}>
                        <Nav className= {'header__nav'}>
                              <Nav.Item as="li">
                              <Link to='/'>Home</Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                              <Link to='/cart'>Cart</Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                              <Link to='/registration'>Registration</Link>
                              </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Home;