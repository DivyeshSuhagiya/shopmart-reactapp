import React, { useEffect, useMemo } from 'react'
import './Login.css'
import { FaFacebook, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import { fetchuserLogin } from '../../redux/actions/useraction.js';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
    const [cookies, setCookie] = useCookies(["userId"]);
    const [count, setcount] = useState()

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()




    let obj = { email: "", password: "" }
    const [value, setvalue] = useState({ ...obj })

    const ChangeInput = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
    }
    const SaveData = () => {
        if ((value.email !== "") && (value.password !== "")) {
            dispatch(fetchuserLogin(value))
            let timerInterval
            Swal.fire({
                title: 'Please Wait....',
                html: 'Cheking Your Username and Password..',
                timer: 4000,
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
                if (result.dismiss === Swal.DismissReason.timer) {
                }
                setcount(1)
            })
            
        }
        else{
            Swal.fire({
                icon: 'info',
                title: 'Please Fill Form.....',
                title: 'Enter Username and Password',
                allowOutsideClick: false,
                showConfirmButton: false,
                timer: 3000
            })
        }
        setvalue({ ...obj })
    }
    
    useEffect(() => {
        if (count === 1) {
            dispatch(fetchuserLogin())
        }
    }, [])
    const isSuccess = user.user.data?.isSuccess;
    if (count === 1) {
        if (isSuccess === undefined) {
            Swal.fire({
                icon: 'info',
                title: 'Please Try Again..',
                title: 'UserName and password wrong!!!',
                allowOutsideClick: false,
                showConfirmButton: false,
                timer: 3000
            })
            setcount()
        }
        else {
            Swal.fire({
                title: 'successfull... ',
                text: "Account Login Successfully.. Please Wait 3 Second",
                icon: "success",
                allowOutsideClick: false,
                confirmButtonColor: '#FCB800',
                confirmButtonText: 'Done!'
            }).then((result) => {
                if (result.isConfirmed) {
                    setTimeout(() => {
                        window.location = "/account";
                    }, 3000);
                }
            })
            setcount()
        }
    }
    return (
        <>
            <div className='p-2 pb-4'>
                <div className='login-main mt-2 shadow'>
                    <div className='login-img row align-items-start'>
                    </div>
                    <div className='login-form p-3'>
                        <h3 className='ps-3'>Login</h3>
                        <form className='p-3 mt-4'>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" name='email' value={value.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={ChangeInput} />
                                <small id="emailHelp" className="form-text text-muted">Enter only registerd email..</small>
                            </div>
                            <div className="form-group mt-4 mb-2">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" name='password' value={value.password} className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={ChangeInput} />
                            </div>
                            <button type="button" onClick={() => SaveData()} className="shopNow btn_hover mt-4">Submit</button>

                            <p className='mt-3'>Don't have an account?<NavLink to='/register'>Sign Up</NavLink></p>
                        </form>
                        <div className='ps-3 mt-0'>
                            <a target="_blank" href="https://www.facebook.com"><FaFacebook className='me-3' size="30px" style={{ color: "#144e6e" }} /></a>
                            <a target="_blank" href="https://www.twitter.com"><FaTwitter className='me-3' size="30px" style={{ color: "#0d3069" }} /></a>
                            <a target="_blank" href="https://www.google.com"><FaGooglePlusG className='me-3' size="30px" style={{ color: "#c20c0c" }} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login