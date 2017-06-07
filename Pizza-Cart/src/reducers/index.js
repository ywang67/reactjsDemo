import { combineReducers } from 'redux';
import  pizzaReducer from './pizzaReducer';
import cartReducer from './cartReducer';


const reducers = combineReducers({
  pizzaData:pizzaReducer,
  cart: cartReducer
});

export default reducers;
