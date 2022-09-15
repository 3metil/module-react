import React from 'react';
// import {Col, Container, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux'
import './Header.scss'

const Header = () => {
  const {count, totalCost, prod} = useSelector(state => state.cart);
  
  


  
return (
        
<header className="header">
<h1>НАША ПРОДУКЦИЯ</h1>
      <div className="menu__cart"><Link to='/cart' className='menu__link'><img src='../images/cart.svg'></img></Link>
      <div className='header__wrap'>
      <div className='header__quantity'>{count} {prod} </div>
      <div className='header__counter'> на сумму {totalCost}<span> &#8381;</span></div></div>
</div>
      </header>
    );
};

export default Header;