import React, { useEffect, useState } from 'react'
import { fetchProduct, fetchProductPost } from '../../redux/actions/productaction'
import "./AddProduct.css"
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { useCookies } from 'react-cookie'

function AddProduct() {
    const [cookies, setCookie] = useCookies(["userId"]);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])

    let obj = { shopName: "", price: "", offerPrice: "", productImage: "", discount: "", productName: "" , category : "" , userId : cookies.userId}
    const [value, setvalue] = useState({ ...obj })

    const ChangeInput = (e) => {
        if (e.target.name === 'productImage') {
            let filepath = e.target.files[0];
            setvalue({ ...value, [e.target.name] : filepath })
        }
        else{
            setvalue({ ...value, [e.target.name]: e.target.value })
        }
    }
    const SaveData = () => {
        if ((value.shopName !== "") && (value.price !== "") && (value.offerPrice !== "") && (value.productImage !== "") && (value.discount !== "") && (value.productName !== "") && (value.category !== "")) {
            dispatch(fetchProductPost(value))
        }
        setvalue({ ...obj })
        Swal.fire('Your Product is Upload Successfully....')
    }

    return (
        <>
            <div className='product-bg mb-5 px-3'>
                <form className="form-horizontal">
                    <div className='row p-3 shadow align-items-start'>
                        <h4 className='mt-3'>Add New Product</h4>
                        <hr className='mb-5' />
                        <div className='col-12 col-md-6 p-0 px-3'>
                            <div className="form-group">
                                <label className="control-label" for="product_name">PRODUCT NAME</label>
                                <input id="product_name" value={value.productName} name="productName" placeholder="Enter Product Name" className="form-control mb-4" required="" type="text" onChange={ChangeInput} />
                            </div>

                            <div className="form-group">
                                <label className="control-label" for="product_categorie">PRODUCT CATEGORY</label>
                                <select id="product_categorie" value={value.category} name="category" className="form-control mb-4" onChange={ChangeInput}>
                                    <option value='Electronics'>Electronics</option>
                                    <option value='Mobiles'>Mobiles</option>
                                    <option value='Jewelry'>Jewelry</option>
                                    <option value='Cloth'>Cloth</option>
                                    <option value='Kitchen'>Kitchen</option>
                                    <option value='Shoes'>Shoes</option>
                                    <option value='Watch'>Watch</option>
                                    <option value='Other'>Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="control-label" for="available_quantity">MARKET PRICE</label>
                                <input id="available_quantity" value={value.price} name="price" placeholder="Enter Market Price" className="form-control mb-4" required="" type="number" onChange={ChangeInput} />
                            </div>
                            <div className="form-group">
                                <label className="control-label" for="available_quantity">YOUR PRICE</label>
                                <input id="available_quantity" value={value.offerPrice} name="offerPrice" placeholder="Enter Your Price" className="form-control mb-4" required="" type="number" onChange={ChangeInput} />
                            </div>
                        </div>
                        <div className='col-12 col-md-6 p-0 px-3'>
                            <div className="form-group">
                                <label className="control-label" for="available_quantity">SHOP NAME</label>
                                <input id="available_quantity" value={value.shopName} name="shopName" placeholder="Enter Shop Name" className="form-control mb-4" required="" type="text" onChange={ChangeInput} />
                            </div>
                            <div className="form-group">
                                <label className="control-label" for="percentage_discount">PERCENTAGE DISCOUNT</label>
                                <input id="percentage_discount" value={value.discount} name="discount" placeholder="Enter Discount In Percentage" className="form-control mb-4" required="" type="number" onChange={ChangeInput}/>
                            </div>
                            <div className="form-group">
                                <label class="form-label" for="customFile">SELECT PRODUCT IMAGE</label>
                                <input type="file" name='productImage' class="form-control mb-4" id="customFile" onChange={ChangeInput}/>
                            </div>
                        </div>
                        <button type='button' className='shopNow ms-3 mt-4' style={{ width: "100px" }} onClick={()=> SaveData()}>Submit</button>
                        <button type='reset' className='shopNow ms-3 mb-4 mt-4' style={{ width: "100px", backgroundColor: "lightgray" }}>Cancle</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddProduct