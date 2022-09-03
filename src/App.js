import React from 'react';
import './App.scss';
import Btn from './components/ui/Button.js'
import {Col, Container, Nav, Row} from "react-bootstrap";
import {Link, BrowserRouter} from "react-router-dom";
import Products from './pages/Products';
import Basket from './pages/Basket'
import AppRouter from "./components/approuter/AppRouter"
import Header from './pages/Header'

function App() {

  return (
 <div>
        <BrowserRouter>
        <AppRouter/>
        </BrowserRouter>
 </div>
  );
}

export default App;