import React from 'react'
import bg_img from '../../assets/images/login.jpg'
import './Login.css'
import { FaFacebook, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import { fetchuser, fetchuserLogin } from '../../redux/actions/useraction.js';
import { useState , useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
    const [cookies, setCookie] = useCookies(["userId"]);

    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchuserLogin())
    }, [])

    let obj = {  email: "" , password : "" }
    const [value, setvalue] = useState({ ...obj })

    const ChangeInput = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
    }

    const SaveData = () => {
        if((value.email !== "") && (value.password !== ""))
        {
            dispatch(fetchuserLogin(value));

            // if(document.cookie !== undefined){
            //     document.getElementsByClassName('login-main')[0].style.display = "none"
            // }
            Swal.fire({
                title: 'successfull...',
                text: "Account Login Successfully..",
                icon: "success",
                allowOutsideClick: false,
                confirmButtonColor: '#FCB800',
                confirmButtonText: 'Done!'
              }).then((result) => {
                if (result.isConfirmed) {
                //   window.location.reload()
                }
              })
        }   
        setvalue({ ...obj })
        
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
                                <input type="email" name='email' value={value.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={ChangeInput}/>
                                <small id="emailHelp" className="form-text text-muted">Enter only registerd email..</small>
                            </div>
                            <div className="form-group mt-4 mb-2">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" name='password' value={value.password} className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={ChangeInput} />
                            </div>
                            <NavLink to={cookies.userId && cookies.userId === undefined? "/login" :"/account"}>
                                <button type="button" onClick={() => SaveData()} className="shopNow btn_hover mt-4">Submit</button>
                                </NavLink>
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

export default Login