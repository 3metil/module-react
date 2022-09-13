// import {products} from '../menuList.js'
import { createSlice } from '@reduxjs/toolkit'
// import cartReducer from './index.js'
// import store from './store'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addProduct(state, action) {
        
        state.cart.push(action.payload)
        },
        removeProduct(state, action) {
        
        // console.log(state)
        // console.log(state.cart)
        // console.log(action)
        
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        // console.log(state)
        }
    }

})

export const { addProduct } = cartSlice.actions
export const { removeProduct } = cartSlice.actions

export default cartSlice.reducer


