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
        addProduct(state, action){

                },
 
    }

})

export const { addproduct } = cartSlice.actions

export default cartSlice.reducer

// const initialState = {
//     products,
//     cart: []
// }

// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_CART':
//             return {...state, cart: [...state.cart, state.cards.find(product => product.id === action.id)]}
//         case 'REM_CART':
//             return {...state, cart: state.cart.filter(product => product.id !== action.id)}
//         default:
//             return state

//     }
// }