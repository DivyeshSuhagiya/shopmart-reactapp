import axios from "axios";
import { PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_FAILURE } from "../types/type";


let config = {
    'content-type': 'application/json;'
}
// let config_header = {
//     headers: {
//         'content-type': 'multipart/form-data'
//     }
// }

export const fetchProduct = () => {
    return (dispatch) => {
        dispatch(productRequest());
        axios.get("https://node-app-demo-first.herokuapp.com/api/product/get" , config).then(response => {
            const product = response.data
            dispatch(productSuccess(product))
        }).catch(error => {
            dispatch(productFailure(error.massage))
        })
    }
}

// export const fetchProductDelete = (id) => {
//     return (dispatch) => {
//         let userUrl = 'https://student-api.mycodelibraries.com/api/user/delete?id=' + id;
//         dispatch(fetchRequest());
//         axios.delete(userUrl, config).then(
//             dispatch(fetchProduct())
//         ).catch(error => {
//             dispatch(fetchFailure(error.massage))
//         })
//     }
// }

// export const fetchProductPost = (value) => {

//     return (dispatch) => {
//         dispatch(fetchRequest());
//         const formData = new FormData()
//         formData.append("firstName", value.firstName)
//         formData.append("lastName", value.lastName)
//         formData.append("age", value.age)
//         formData.append("hobbies", value.hobbies)
//         formData.append("gender", value.gender)
//         formData.append("userImage", value.image)
//         formData.append("city", value.city)

//         axios.post('https://student-api.mycodelibraries.com/api/user/add', formData, config_header).then(
//             //     response => {
//             //     const product = response.data.data
//             //     dispatch(fetchSuccess(product))
//             // }
//             dispatch(fetchProduct())
//         ).catch(error => {
//             dispatch(fetchFailure(error.massage))
//         })
//     }
// }

// export const fetchProductUpdate = (id) => {

//     return (dispatch) => {
//         dispatch(fetchRequest());
//         // const formData = new FormData()
//         // formData.append("firstName", value.firstName)
//         // formData.append("lastName", value.lastName)
//         // formData.append("age", value.age)
//         // formData.append("hobbies", value.hobbies)
//         // formData.append("gender", value.gender)
//         // formData.append("userImage", value.image)
//         // formData.append("city", value.city)

//         let editurl = 'https://student-api.mycodelibraries.com/api/user/update' + id
//         axios.post(editurl, config_header).then(
//             //     response => {
//             //     const product = response.data.data
//             //     dispatch(fetchSuccess(product))
//             // }
//             dispatch(fetchProduct())
//         ).catch(error => {
//             dispatch(fetchFailure(error.massage))
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