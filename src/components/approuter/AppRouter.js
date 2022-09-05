import React from 'react';
import {Route, Routes} from "react-router-dom";
import Products from '../../pages/Products'
import Basket from '../../pages/Basket'


const AppRouter = () => {
    return (
        <div>
        {/* <Header /> */}
        <Routes>
            <Route path={'/'} element={<Products/>}/>
            <Route path={'/add'} element={<Basket/>}/>
        </Routes>
        </div>
    );
};

export default AppRouter;