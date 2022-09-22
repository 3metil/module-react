import { createSlice } from '@reduxjs/toolkit'


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