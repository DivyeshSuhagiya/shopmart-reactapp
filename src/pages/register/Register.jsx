import React from 'react'
import bg_img from '../../assets/images/login.jpg'
import './Register.css'
import { FaFacebook, FaTwitter, FaGooglePlusG } from "react-icons/fa";

function Register() {
    return (
        <>
            <div className='p-2 pb-4'>
                <div className='register-main mt-2 shadow'>
                    <div className='register-img row align-items-start'>
                    </div>
                    <div className='register-form p-3'>
                        <h3 className='ps-3'>Register</h3>
                        <form className='p-3 mt-4'>
                            <div class="form-group mb-2">
                                <label for="User Name">User Name</label>
                                <input type="text" class="form-control" id="User Name" placeholder="Enter User Name" />
                            </div>
                            <div class="form-group mb-2">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="form-group mb-2">
                                <label for="Mobile No.">Mobile No.</label>
                                <input type="text" class="form-control" id="Mobile No." aria-describedby="emailHelp" placeholder="Enter Mobile No." />
                            </div>
                            <div class="form-group mb-2">
                                <label for="Password">Password</label>
                                <input type="password" class="form-control" id="Password" placeholder="Enter Password" />
                            </div>
                            <div class="form-group mb-2">
                                <label for="Confirm Password">Confirm Password</label>
                                <input type="password" class="form-control" id="Confirm Password" placeholder="Enter Confirm Password" />
                            </div>
                            <button type="button" class="shopNow btn_hover mt-4">Submit</button>
                        </form>
                        <div className='ps-3 mt-4'>
                            <FaFacebook className='me-3' size="30px" style={{ color: "#144e6e" }} />
                            <FaTwitter className='me-3' size="30px" style={{ color: "#0d3069" }} />
                            <FaGooglePlusG className='me-3' size="30px" style={{ color: "#c20c0c" }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register