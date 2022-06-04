import React, { useState } from 'react'
import './HeaderTop.css'
import { BiMenu } from "react-icons/bi";
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'


function HeaderTop() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='header-top px-3 py-1'>
                <div class="">
                    <div className='row'>
                        <div className='logo col-6 col-sm-3 col-lg-2 p-0'><h1 className='fs-2'>Shop<span style={{ color: "white" }}>mart</span></h1></div>
                        <div className='col-12 col-sm-8 col-lg-7 p-0 d-none d-sm-block'>
                            <form className='header-search'>
                                <div class="search-group mb-3">
                                    <input type="text" placeholder="I'm a shopping for.." />
                                    <div class="search-group-append">
                                        {/* <i className='bx bx-search-alt-2 bx-sm' style={{ color: "white" }}  ></i> */}
                                        Search
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='col-6 col-sm-1 p-0 d-block d-lg-none d-flex justify-content-end' style={{ cursor: "pointer" }}><BiMenu size='35px' onClick={handleShow} /></div>
                        <div className='col col-lg-3 d-none d-lg-block'>
                            <div className='header-icon d-flex justify-content-evenly align-items-center'>
                                <div className='icon'>
                                    <i class='bx bx-heart bx-md' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Favorite"></i>
                                    <span>1</span>
                                </div>
                                <div className='icon'>
                                    <i class='bx bx-shopping-bag bx-md' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Cart"></i>
                                    <span>0</span>
                                </div>
                                <div>
                                    <i class='bx bx-notepad bx-md' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Feedback"></i>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <i class='bx bx-user bx-md' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Account"></i>
                                    <div className='ms-2'>
                                        <NavLink to='/login' className='text-dark'> <h6 className='m-0'>Login</h6></NavLink>
                                        <NavLink to='/register' className='text-dark'><h6 className='m-0'>Register</h6></NavLink>
                                        {/* <h6 className='m-0'>Account</h6> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row p-0' style={{ backgroundColor: "#FCB800" }}>
                        <div className='col-10 d-block d-sm-none text-start p-0 m-0'>
                            <form className='header-search p-0 m-0'>
                                <div class="search-group mb-3">
                                    <input type="text" placeholder="I'm a shopping for.." />
                                    <div class="search-group-append">
                                        {/* <i className='bx bx-search-alt-2 bx-sm' style={{ color: "white" }}  ></i> */}
                                        Search
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='col-2 d-block d-sm-none text-end m-0 p-0'>
                            <i class='bx bx-user bx-md' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Account"></i>
                        </div>
                    </div>
                </div>
            </div>


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton className='mb-3' style={{ backgroundColor: "#FCB800" }}>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='sidebar-menu p-0'>
                    <NavLink exact to='/'><p className='ps-3 m-0' onClick={handleClose}>Page 1</p></NavLink>
                    <NavLink to='/page2'><p className='ps-3 m-0' onClick={handleClose}>Page 2</p></NavLink>
                    <NavLink to='/page3'><p className='ps-3 m-0' onClick={handleClose}>Page 3</p></NavLink>
                    <NavLink to='/page4'><p className='ps-3 m-0' onClick={handleClose}>Page 4</p></NavLink>
                    <NavLink to='/page5'><p className='ps-3 m-0' onClick={handleClose}>Page 5</p></NavLink>
                    <NavLink to='/page6'><p className='ps-3 m-0' onClick={handleClose}>Page 6</p></NavLink>
                    <NavLink to='/page7'><p className='ps-3 m-0' onClick={handleClose}>Page 7</p></NavLink>
                    <NavLink to='/page8'><p className='ps-3 m-0' onClick={handleClose}>Page 8</p></NavLink>
                    <NavLink to='/page9'><p className='ps-3 m-0' onClick={handleClose}>Page 9</p></NavLink>
                    <p className='ps-3 m-0' style={{cursor : "context-menu" , backgroundColor: "transparent"}}>
                        <NavLink to='/login'><button className='border-1 px-3 py-1 ' onClick={handleClose}>Login</button></NavLink>
                        <NavLink to='/register'><button className='px-2 py-1 border-1 ms-3' onClick={handleClose}>Register</button></NavLink>
                    </p>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default HeaderTop