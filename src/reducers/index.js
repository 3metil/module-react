// import src1 from '../assets/p1.jpg'
// import src2 from '../assets/p2.jpg'
// import src3 from '../assets/p3.jpg'
import {products} from '../menuList.js'

const initialState = {
    products,
    cart: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART':
            return {...state, cart: [...state.cart, state.cards.find(product => product.id === action.id)]}
        case 'REM_CART':
            return {...state, cart: state.cart.filter(product => product.id !== action.id)}
        default:
            return state

    }
}