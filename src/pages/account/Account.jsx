import React, { useEffect } from 'react'
import ContactLinks from '../../components/contactLinks/ContactLinks'
import Footer from '../../components/footer/Footer'
import NewSletter from '../../components/newSletter/NewSletter'
import ProductLinks from '../../components/productLinks/ProductLinks'
import './Account.css'
import { FaCog , FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { fetchuser, fetchuserGetById } from '../../redux/actions/useraction.js'

function Account() {

    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchuserGetById())
    }, [user])

    return (
        <>
            <div className='account mt-2 mb-5'>
                <div className='svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L120,213.3C240,203,480,181,720,197.3C960,213,1200,267,1320,293.3L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
                </div>
                <div className='pb-5 mt-3'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-lg-7 shadow-lg px-3 py-4' style={{borderRadius:"20px"}}>
                                <h3 className='ms-3'>{user ? user.userName : "---"}</h3>
                                <h6 className='mt-4 p-2' style={{borderBottom:"1px solid lightgray"}}>ID : {user ? user._id : "---"}</h6>
                                <h6 className='mt-4 p-2' style={{borderBottom:"1px solid lightgray"}}>Email Address : {user ? user.email : "---"}</h6>
                                <h6 className='mt-4 p-2' style={{borderBottom:"1px solid lightgray"}}>Mobile Number : {user ? user.mobile : "---"}</h6>
                                <div className='d-flex mt-5'>
                                    <FaCog /><h6 className='ms-2'>Setting</h6>
                                </div>
                                <div className='d-flex mt-4'>
                                    <FaSignOutAlt /><h6 className='ms-2'>LogOut</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <NewSletter />
            <ContactLinks />
            <ProductLinks />
            <Footer />
        </>
    )
}

export default Account