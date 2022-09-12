import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { createStore } from 'redux'

import store from './store'

import reportWebVitals from './reportWebVitals';

// const defaultState = {
//   count: 0,
//   basket: []
// }

// const reducer = (state = defaultState, action) => {
//   switch(action.type) {
//     case 'PLUS_COUNT':
//       return {...state, count: state.count + action.payload}
//     case 'MINUS_COUNT':
//       return {...state, count: state.count - action.payload}
//     default:
//       return state
//   }
// } 

// const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


