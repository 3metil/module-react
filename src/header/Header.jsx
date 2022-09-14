import React from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux'


const Header = () => {
  const {count, totalCost, prod} = useSelector(state => state.cart);
  
  


  
return (
        
<header className="header">
<h1>НАША ПРОДУКЦИЯ</h1>
      <div className="menu__basket"><Link to='/cart'><img src='../images/basket.svg'></img></Link>
      <div className='header__quantity'>{count} {prod}</div>
      <div className='header__counter'> на сумму {totalCost}<span> &#8381;</span></div>
</div>
      </header>
    );
};

export default Header;