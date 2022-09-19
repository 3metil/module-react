import React from 'react';
import {Route, Routes} from "react-router-dom";
import Products from '../../pages/Products'
import Cart from '../../pages/Cart'
import Registration from '../../pages/Registration';
import Enterance from '../../pages/Enterance';


const AppRouter = () => {
    return (
        <div>
        
        <Routes>
            <Route path={'/'} element={<Products/>}/>
            <Route path={'/cart'} element={<Cart/>}/>
            <Route path={'/registration'} element={<Registration/>}/>
            <Route path={'/enterance'} element={<Enterance/>}/>
        </Routes>
        </div>
    );
};

export default AppRouter;