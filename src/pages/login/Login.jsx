import React from 'react'
import bg_img from '../../assets/images/login.jpg'
import './Login.css'
import { FaFacebook, FaTwitter, FaGooglePlusG } from "react-icons/fa";

function login() {
    return (
        <>
            <div className='p-2 pb-4'>
                <div className='login-main mt-2 shadow'>
                    <div className='login-img row align-items-start'>
                    </div>
                    <div className='login-form p-3'>
                        <h3 className='ps-3'>Login</h3>
                        <form className='p-3 mt-4'>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">Enter only registerd email..</small>
                            </div>
                            <div class="form-group mt-4 mb-2">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <button type="button" class="shopNow btn_hover mt-4">Submit</button>
                        </form>
                        <div className='ps-3 mt-5'>
                            <FaFacebook className='me-3' size="30px" style={{color:"#144e6e"}}/>
                            <FaTwitter className='me-3' size="30px" style={{color:"#0d3069"}}/>
                            <FaGooglePlusG className='me-3' size="30px" style={{color:"#c20c0c"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default login