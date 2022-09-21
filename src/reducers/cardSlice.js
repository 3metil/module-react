import { createSlice } from "@reduxjs/toolkit";
const cardSlice = createSlice({
    name: 'card',
    initialState: {
        card: {},
        
    },
    reducers: {
        readProduct(value, action) {
            console.log(value)
        }
    }

})

console.log(card)
export default cardSlice.reducer