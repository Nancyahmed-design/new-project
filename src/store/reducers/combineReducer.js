import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import ProductsReducer from './Product';
export default combineReducers({
   coun:counterReducer,
   products:ProductsReducer,
});

