import React, { useEffect } from 'react'
import ContactLinks from '../../components/contactLinks/ContactLinks'
import Footer from '../../components/footer/Footer'
import NewSletter from '../../components/newSletter/NewSletter'
import ProductLinks from '../../components/productLinks/ProductLinks'
import './Account.css'
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { fetchuserGetById } from '../../redux/actions/useraction.js'
import AddProduct from '../../components/addProduct/AddProduct'
import { useCookies } from 'react-cookie'
import { fetchProduct } from '../../redux/actions/productaction'
import { Rating } from 'react-simple-star-rating'

function Account() {
    const [cookies, setCookie, removeCookie] = useCookies(["userId"]);

    const user = useSelector(state => state.user.user)
    const product = useSelector(state => state.product.product)
    const dispatch = useDispatch()

    const productNum = product.filter(x => x.userId === cookies.userId)

    useEffect(() => {
        dispatch(fetchuserGetById())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])

    return (
        <>
            <div className='account mt-2 mb-5'>
                {/* <div className='svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L120,213.3C240,203,480,181,720,197.3C960,213,1200,267,1320,293.3L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
                </div> */}
                <div className='pb-5 mt-3'>
                    <div className='container-fluid'>
                        <div className='row h-100 shadow-lg' style={{ backgroundImage: "linear-gradient(to right, #FCB800 , #fc680a)" }}>
                            <div className='col-12 col-sm-4 col-lg-3 h-100 d-flex justify-content-center'>
                                <div className='my-5 d-flex flex-column align-items-center'>
                                    <h1 className='d-flex justify-content-center align-items-center display-2 text-white' style={{ width: "120px", height: "120px", borderRadius: "50%", backgroundColor: "purple" }}>{user ? user.userName?.split('')[0] : null}</h1>
                                    <h5 className='display-6'>Hey! {user ? user.userName : null}</h5>
                                </div>
                            </div>
                            <div className='col-12 col-sm-8 col-lg-9 px-3 py-4 bg-light'>
                                <h3 className='ms-3'>{user ? user.userName : "---"}</h3>
                                <div className='my-3'>
                                    <h6 className='px-2'>Email Address</h6>
                                    <p className='bg-white p-2'>{user ? user.email : "---"}</p>
                                </div>
                                <div className='my-3'>
                                    <h6 className='px-2'>Mobile Number</h6>
                                    <p className='bg-white p-2'>{user ? user.mobile : "---"}</p>
                                </div>
                                <div className='my-3'>
                                    <h6 className='px-2'>Your Products</h6>
                                    <p className='bg-white p-2'>{product ? productNum.length : "---"}</p>
                                </div>
                                <div className='d-flex mt-5'>
                                    <FaCog /><h6 className='ms-2'>Setting</h6>
                                </div>
                                <div className='d-flex mt-4'>
                                    <FaSignOutAlt /><h6 className='ms-2 cursor-pointer' onClick={() => removeCookie("userId")}>LogOut</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AddProduct />


            <div className='row my-5 px-3'>
                <h4 className='ms-2'>Your All Products</h4><hr />
                {
                    product?.filter(x => x.userId === cookies.userId)?.map(x => {
                        return (
                            <div className='col-6 col-md-4'>
                                <div className="card border-0 py-2">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={x.productImage} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body text-start">
                                                <p className='p-0 my-1'>{x.shopName}</p>
                                                <p className='p-0 m-0 product-name' style={{ fontSize: "14px" }}>{x.productName}</p>
                                                <h6 className='m-0 p-0 text-success'>₹{x.price}</h6>
                                                <span className='text-muted' style={{fontSize:"12px"}}><del>₹{x.offerPrice}</del></span>
                                                <h6 className='text-danger'>{x.discount}% off</h6>
                                                <Rating className="pb-2 " readonly="true" size='20' initialValue="0" allowHalfIcon="true" allowHover="false" ratingValue={70} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            <NewSletter />
            <ContactLinks />
            <ProductLinks />
            <Footer />
        </>
    )
}

export default Account