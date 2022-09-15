import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalCost: 0,
        count: 0 + ' товаров'
    },
    reducers: {
        addProduct(state, action) {
        state.cart.push(action.payload)
        state.totalCost = state.cart.reduce((acc, val) => acc + Number(val.price), 0);
        state.count = state.cart.length;
        state.prod = 'товаров'
        console.log(state.prod)

          if (state.count === 1) {
            state.prod = 'товар'
          } else if (state.count === 2 || state.count === 3 || state.count === 4) {
            state.prod = 'товара'
          } else if (state.count >= 5 && state.count <= 20) {
            state.prod = 'товаров' }
          else if (state.count % 10 === 1 ) {
            state.prod = 'товар'
          } else if (state.count % 10 === 2) {
            state.prod = 'товара'
          } else if (state.count % 10 === 3) {
            state.prod = 'товара'
          } else if (state.count % 10 === 4) {
            state.prod = 'товара'
          } else {
            state.prod = 'товаров'
          }
        

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


