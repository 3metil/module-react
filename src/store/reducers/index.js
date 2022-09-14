import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalCost: 0,
        count: 0
    },
    reducers: {
        addProduct(state, action) {
        state.cart.push(action.payload)
        state.totalCost = state.cart.reduce((acc, val) => acc + Number(val.price), 0);
        state.count = state.cart.length;
    },
        removeProduct(state, action) {
        
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        state.totalCost = state.cart.reduce((acc, val) => acc + Number(val.price), 0);
        state.count = state.cart.length;
        
        
        }
    }

})

export const { addProduct } = cartSlice.actions
export const { removeProduct } = cartSlice.actions

export default cartSlice.reducer


