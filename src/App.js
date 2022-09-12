import React, {useState} from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/approuter/AppRouter"
import { useDispatch, useSelector } from "react-redux"
import store from './store'
import { Provider } from 'react-redux';





function App() {

  // const dispatch = useDispatch()
  // const count = useSelector(state => state.count)

  // const handlePlus = () => {
  //   dispatch({
  //     type: 'PLUS_COUNT',
  //     payload: 10
  //   })
  // }

  //   const handleMinus = () => {
  //     dispatch({
  //       type: 'MINUS_COUNT',
  //       payload: 5
  //     })
  //   };
  


  return (
 <div>
{/* 

      {count} <br />
      <button onClick={handlePlus}>PLUS</button>
      <button onClick={handleMinus}>MINUS</button> */}

        <BrowserRouter>
         <AppRouter/>
        </BrowserRouter>
             
 </div>
  );
}

export default App;