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
      <div className="header__cart-wrap">
      
      <div className="menu__cart"><Link to='/cart' className='menu__link'><img src='../images/cart.svg'></img></Link></div>
      
      <div className='header__wrap'>
      <div className='header__quantity'>{count} {prod} </div>
      <div className='header__counter'> на сумму {totalCost}<span> &#8381;</span></div></div>
      <Link to='/enterance'><button className="header__enterance-button">Войти</button></Link></div>

      </header>
    );
};

export default Header;