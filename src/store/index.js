import { configureStore } from "@reduxjs/toolkit/";
// import { createStore } from "redux";
// import { reducer } from './reducers/index'
import cartReducer from './reducers/index'
// export const store = createStore(reducer)



export default configureStore({
    reducer: {
        cart: cartReducer
    }
})

