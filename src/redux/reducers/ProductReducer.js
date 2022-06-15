import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../types/type";

const initialState = {
    loading: false,
    product: [],
    error: ''
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PRODUCT_SUCCESS:
            return {
                loading : false,
                product : action.payload,
                error : ''
            }
        case PRODUCT_FAILURE:
            return {
                loading : true,
                product : [],
                error : action.payload
            }
        default : 
        return state
    }
}


export default ProductReducer