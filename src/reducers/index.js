// import src1 from '../assets/p1.jpg'
// import src2 from '../assets/p2.jpg'
// import src3 from '../assets/p3.jpg'

const initialState = {
    // cards: [
    //     {id: 1, title: 'Pizza ai quattro formaggi', desc: 'Pizza with four cheeses – can be rossa (red) with a base of tomato or bianca (white) with just the cheese. For this recipe you will need a pizza stone (alternatively preheat a heavy baking tray)', price: 1500, img: src1},
    //     {id: 2, title: 'Pizza ai quattro formaggi', desc: ' Pizza with four cheeses – can be rossa (red) with a base of tomato or bianca (white) with just the cheese. For this recipe you will need a pizza stone (alternatively preheat a heavy baking tray)', price: 1100, img: src2},
    //     {id: 3, title: 'Pizza ai quattro formaggi', desc: ' Pizza with four cheeses – can be rossa (red) with a base of tomato or bianca (white) with just the cheese. For this recipe you will need a pizza stone (alternatively preheat a heavy baking tray)', price: 700, img: src3},
    //     {id: 4, title: 'Pizza ai quattro formaggi', desc: ' Pizza with four cheeses – can be rossa (red) with a base of tomato or bianca (white) with just the cheese. For this recipe you will need a pizza stone (alternatively preheat a heavy baking tray)', price: 800, img: src1},
    //     {id: 5, title: 'Pizza ai quattro formaggi', desc: ' Pizza with four cheeses – can be rossa (red) with a base of tomato or bianca (white) with just the cheese. For this recipe you will need a pizza stone (alternatively preheat a heavy baking tray)', price: 400, img: src2}
    // ],
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