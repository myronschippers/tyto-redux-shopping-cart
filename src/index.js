import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Default set of products
const products = [
    { name: `Marshmallow Mateys`, price: 6.98 },
    { name: `Golden Honney O's`, price: 6.48 },
    { name: `Frosted Flakes`, price: 3.98 },
];

// Array of products, this reducer is complete
const productReducer = (state = products, action) => {
    if (action.type === 'ADD_NEW_PRODUCT') {
        return [...state, action.payload];
    }
    return state;
};

// Items in the cart, this reducer is incomplete
const checkoutReducer = (state = [], action) => {
    // TODO: Products added to the cart
    if (action.type === 'ADD_TO_CART') {
        return [
            ...state,
            // action.payload = {
            //     name: 'string',
            //     price: number
            // }
            action.payload,
        ];
    } else if (action.type === 'CLEAR_CART') {
        return [];
    } 
    
    return state;
};

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        productReducer,
        checkoutReducer
    }),    
    applyMiddleware(logger)
);

// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));