// action for get products request
import axios from 'axios'
import {GET_PRODUCT_REQ,GET_PRODUCT_SUCESS,GET_PRODUCT_FAILURE,SORT_DATA,
    GET_CLICKED_DATA_FAILURE,GET_CLICKED_DATA_REQ,GET_CLICKED_DATA_SUCCESS,
    } from './actionTypes';

import {useDispatch} from  'react-redux';

export const getProductsReq = () => ({
    type:GET_PRODUCT_REQ
});

// action for get products success

export const getProductsSuccess = (payload) => ({
    type:GET_PRODUCT_SUCESS,
    payload
});

// action for get products failure

export const getProductsFailure = () => ({
   type: GET_PRODUCT_FAILURE
});

// thunk call to fetch products  list
export const getproductsData = () => {
   return(dispatch) =>{
       dispatch(getProductsReq());
       axios.get("https://movie-fake-server.herokuapp.com/products")
       .then((res) =>{
           dispatch(getProductsSuccess(res.products))
       })
       .catch(() =>{
           dispatch(getProductsFailure())
       })
   }
};

// action object for sort  feature

export const sortProducts = (payload) => ({
    type: SORT_DATA,
    payload,
});

export const getClickedProductsReq = () => ({
    type: GET_CLICKED_DATA_REQ,
  });
  
  // action for get products success
  
  export const getClickedProductsSuccess = (payload) => ({
    type: GET_CLICKED_DATA_SUCCESS,
    payload,
  });
  
  // action for get products failure
  
  export const getClickedProductsFailure = () => ({
    type: GET_CLICKED_DATA_FAILURE,
  });
  
  // thunk call to fetch products  list
  export const getClickedproductData = (id) => {
    return (dispatch) => {
      dispatch(getClickedProductsReq());
      axios
        .get(`https://movie-fake-server.herokuapp.com/products/${id}`)
        .then((res) => {
          // console.log(res.data);
          dispatch(getClickedProductsSuccess(res.data));
        })
        .catch((err) => {
          dispatch(getClickedProductsFailure());
          console.log(err);
        });
    };
  };