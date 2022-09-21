import { configureStore } from "@reduxjs/toolkit/";
import cartReducer from './reducers/index'



export default configureStore({
    reducer: {
        cart: cartReducer
    }
})

