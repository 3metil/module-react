import React from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        
                  <header className="header">
                  <h1>НАША ПРОДУКЦИЯ</h1>
      <div className="menu__basket"><Link to='/cart'><img src='../images/basket.svg'></img></Link>
      <div className='header__counter'><span>товар/а/ов на сумму  &#8381;</span></div>
</div>
      </header>
    );
};

export default Header;