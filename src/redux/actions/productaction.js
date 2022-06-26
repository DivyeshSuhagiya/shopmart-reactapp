import axios from "axios";
import { PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_FAILURE } from "../types/type";


export const fetchProduct = () => {
    return (dispatch) => {
        dispatch(productRequest());
        axios.get("https://shopmart-nodeapp.herokuapp.com/api/product/get").then(response => {
            const product = response.data.data
            dispatch(productSuccess(product))
        }).catch(error => {
            dispatch(productFailure(error.massage))
        })
    }
}

// export const fetchProductDelete = (id) => {
//     return (dispatch) => {
//         let userUrl = 'https://shopmart-nodeapp.herokuapp.com/api/product/delete?id=' + id;
//         dispatch(productRequest());
//         axios.delete(userUrl, config).then(
//             dispatch(fetchProduct())
//         ).catch(error => {
//             dispatch(productFailure(error.massage))
//         })
//     }
// }

export const fetchProductPost = (value) => {

    return (dispatch) => {
        dispatch(productRequest());
        console.log(value)
        const formData = new FormData()
        formData.append("shopName", value.shopName)
        formData.append("price", value.price)
        formData.append("offerPrice", value.offerPrice)
        formData.append("productImage", value.productImage)
        formData.append("discount", value.discount)
        formData.append("productName", value.productName)
        formData.append("category", value.category)
        formData.append("userId", value.userId)

        axios.post('https://shopmart-nodeapp.herokuapp.com/api/product/post', formData).then(
                response => {
                const product = response.data.data
                dispatch(productSuccess(product))
                dispatch(fetchProduct())
                console.log(product)
            }
            
        ).catch(error => {
            dispatch(productFailure(error.massage))
        })
    }
}

// export const fetchProductUpdate = (id) => {

//     return (dispatch) => {
//         dispatch(productRequest());
//         // const formData = new FormData()
//         // formData.append("firstName", value.firstName)
//         // formData.append("lastName", value.lastName)
//         // formData.append("age", value.age)
//         // formData.append("hobbies", value.hobbies)
//         // formData.append("gender", value.gender)
//         // formData.append("userImage", value.image)
//         // formData.append("city", value.city)

//         let editurl = 'https://shopmart-nodeapp.herokuapp.com/api/product/update' + id
//         axios.post(editurl, config_header).then(
//             //     response => {
//             //     const product = response.data.data
//             //     dispatch(productSuccess(product))
//             // }
//             dispatch(fetchProduct())
//         ).catch(error => {
//             dispatch(productFailure(error.massage))
//         })
//         console.log(editurl)
//     }
// }

export const productRequest = () => {
    return {
        type: PRODUCT_REQUEST
    }
}
export const productSuccess = (product) => {
    return {
        type: PRODUCT_SUCCESS,
        payload: product
    }
}
export const productFailure = (error) => {
    return {
        type: PRODUCT_FAILURE,
        payload: error
    }
}