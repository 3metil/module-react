import React from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/approuter/AppRouter"


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