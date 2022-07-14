import React from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderBottom.css'

function HeaderBottom() {
  return (
    <>
        <div className='header-bottom px-3 py-1' style={{zIndex:100}}>
            <div className=''>
                <div className='row justify-content-between'>
                    <div className='col-4 col-lg-2 p-0 d-flex align-items-center'>
                        <i className='bx bx-menu-alt-right bx-sm' style={{cursor : "pointer"}}></i>
                        <h6 className='d-inline-block ms-2 mt-1 hover-underline-animation overflow-hidden' style={{whiteSpace:"nowrap" ,textOverflow: 'ellipsis'}}>Shop by Department</h6>
                    </div>
                    <div className='col-8 col-lg-7' >
                        <ul className='d-flex my-0 list-unstyled justify-content-between align-items-center'>
                            <NavLink exact to='/'><li>Home</li></NavLink>
                            <NavLink to='/Electronics'><li>Electronics</li></NavLink>
                            <NavLink to='/Mobiles'><li>Mobiles</li></NavLink>
                            <NavLink to='/Jewelry'><li>Jewelry</li></NavLink>
                            <NavLink to='/Cloth'><li>Cloth</li></NavLink>
                            <NavLink to='/Kitchen'><li>Kitchen</li></NavLink>
                            <NavLink to='/Watches'><li>Watches</li></NavLink>
                            <NavLink to='/Shoes'><li>Shoes</li></NavLink>
                            <NavLink to='/About'><li>About</li></NavLink>
                            <NavLink to='/Contact'><li>Contact</li></NavLink> 
                        </ul>
                    </div>
                    <div className='sell col-lg-3'>
                            <div className='d-flex justify-content-end'>
                                <NavLink to='/account'><span>Sell on Shopmart</span></NavLink>
                                <NavLink to='/account'><span>Tract your order</span></NavLink>
                            </div>
                    </div>
                </div>
            </div>
        </div>


        
    </>
  )
}

export default HeaderBottom