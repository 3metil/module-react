import React from 'react';
import './App.scss';
import Btn from './components/ui/Button.js'

import Products from './pages/Products';
import Basket from './pages/Basket'
function App() {

const BtnPlus = React.createRef()



const handlePlusCount = () => {
  
  console.log(BtnPlus)
}
const handleMunusCount = () => {
  
  
}
  return (
 <div>
  {/* <Products /> */}
  <Basket />
 </div>
  );
}

export default App;