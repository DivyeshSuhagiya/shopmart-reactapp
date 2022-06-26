import React from 'react'
import './Register.css'
import { FaFacebook, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import { fetchuser, fetchuserActivationCode, fetchuserRegister } from '../../redux/actions/useraction.js';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

function Register() {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchuser())
    }, [])

    let obj = { userName: "", email: "", mobile: "", password: "", confirmPassword: "", accountActivationCode: "" }
    const [value, setvalue] = useState({ ...obj })
    const [emailotp, setemailotp] = useState()

    const ChangeInput = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })

    }
    const SaveData = () => {
        if ((value.userName !== "") && (value.email !== "") && (value.mobile !== "") && (value.password !== "") && (value.confirmPassword !== "")) {
            dispatch(fetchuserRegister(value))
            document.getElementsByClassName('register-main')[0].style.display = "none"
            document.getElementsByClassName('otp')[0].style.display = "block"
            setemailotp(value.email)
        }
        setvalue({ ...obj })
    }
    const SaveOtp = () => {
        if ((value.accountActivationCode !== "")) {
            dispatch(fetchuserActivationCode(emailotp, value))
            document.getElementsByClassName('otp')[0].style.display = "none"

            let timerInterval
            Swal.fire({
                title: 'Auto close alert!',
                html: 'I will close in <b></b> milliseconds.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
        }
        setvalue({ ...obj })
    }

    return (
        <>
            <div className='p-2 pb-4'>
                <div className='register-main mt-2 shadow'>
                    <div className='register-img row align-items-start'>
                    </div>
                    <div className='register-form p-3'>
                        <h3 className='ps-3'>Register</h3>
                        <form className='p-3 mt-4'>
                            <div className="form-group mb-2">
                                <label htmlFor="User Name">User Name</label>
                                <input type="text" name='userName' value={value.userName} className="form-control" id="User Name" placeholder="Enter User Name" onChange={ChangeInput} />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" name='email' value={value.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={ChangeInput} />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="Mobile No.">Mobile No.</label>
                                <input type="text" name='mobile' value={value.mobile} className="form-control" id="Mobile No." aria-describedby="emailHelp" placeholder="Enter Mobile No." onChange={ChangeInput} />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="Password">Password</label>
                                <input type="password" name='password' value={value.password} className="form-control" id="Password" placeholder="Enter Password" onChange={ChangeInput} />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="Confirm Password">Confirm Password</label>
                                <input type="password" name='confirmPassword' value={value.confirmPassword} className="form-control" id="Confirm Password" placeholder="Enter Confirm Password" onChange={ChangeInput} />
                            </div>
                            <button type="button" onClick={() => SaveData()} className="shopNow btn_hover mt-4">Submit</button>
                        </form>
                        <div className='ps-3 mt-4'>
                            <FaFacebook className='me-3' size="30px" style={{ color: "#144e6e" }} />
                            <FaTwitter className='me-3' size="30px" style={{ color: "#0d3069" }} />
                            <FaGooglePlusG className='me-3' size="30px" style={{ color: "#c20c0c" }} />
                        </div>
                    </div>
                </div>
                <div className='otp shadow m-auto p-3 mt-4'>
                    <h4>OTP</h4>
                    <hr />
                    <form action="">
                        <input type="hidden" name='email' value={value.email} onChange={ChangeInput} />

                        <input type="text" name='accountActivationCode' value={value.accountActivationCode} onChange={ChangeInput} className='border-1 py-1 px-2 w-100' placeholder='Enter OTP code' />
                        <button type='button' className='mt-3 shopNow py-1 btn_hover' onClick={() => SaveOtp()}>Confirm</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register