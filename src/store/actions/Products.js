import axios from "axios";
import * as TYPES from "../types/Products";

export const getProducts = () => (dispatch) => {
    axios
    .get('https://fakestoreapi.com/products')
    .then((response) => { 
         // success 
        console.log(response.data)       
        dispatch({
            type: TYPES.GET_PRODUCT,
            payload :response.data
        })
       // console.log(response.data)       
    })  
    .catch(function (error) {
      console.log(error);
    });
};

