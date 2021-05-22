import {combineReducers} from 'redux';
import ProductReducer from './product.reducer';
import CartReducer from "./cart.reducer"
import OrderReducer from "./orders.reducer"

// place all the reducers in rootReducer here
const rootReducer = combineReducers({
    ProductReducer, CartReducer, OrderReducer
});

export default rootReducer;
