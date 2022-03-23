import {GET_PRODUCT_REQ,
  GET_PRODUCT_SUCESS,
  GET_PRODUCT_FAILURE,
   SORT_DATA,
   GET_CLICKED_PRODUCT_REQ,
   GET_CLICKED_PRODUCT_SUCCESS,
   GET_CLICKED_PRODUCT_FAILURE,
} from './actionTypes';

const initState = {
    products:[],
    isLoading:false,
    isError:false,
    sortProduct:[],
    clickedProd: [],
}

export const Reducer = (state = initState, {type,payload})=>{
    // add the switch statement for different actions
    switch(type){
        case GET_PRODUCT_REQ:
            return{...state, isLoading:true};
        case GET_PRODUCT_SUCESS:
            return{...state,
                isLoading: false,
                products: [...payload],
                sortProduct:[...payload],
                isError: false,};
        case GET_PRODUCT_FAILURE:
            return{...state, isLoading:false, products:[], isError:true};
        case SORT_DATA:
            if (payload == "--sort by --")
        return {
          ...state, sortProduct: [...state.products],
        };
      else if (payload == "asc")
        return {
          ...state,sortProduct: [...state.sortProduct.sort((a, b) => a.price - b.price)],
        };
      else if (payload == "desc")
        return {
          ...state,
          sortProduct: [...state.sortProduct.sort((a, b) => b.price - a.price)],
        };
        case GET_CLICKED_PRODUCT_REQ:
      return {...state,isLoading: true,
      };
    case GET_CLICKED_PRODUCT_SUCCESS:
      return {...state,isLoading: false,clickedProd: payload,isError: false,
      };
    case GET_CLICKED_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
        default:
            return state
    }

}