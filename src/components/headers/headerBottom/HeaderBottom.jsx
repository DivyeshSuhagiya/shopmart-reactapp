import React from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderBottom.css'

function HeaderBottom() {
  return (
    <>
        <div className='header-bottom px-3 py-1 sticky-top'>
            <div className=''>
                <div className='row justify-content-between'>
                    <div className='col-4 col-lg-2 p-0 d-flex align-items-center'>
                        <i className='bx bx-menu-alt-right bx-sm' style={{cursor : "pointer"}}></i>
                        <h6 className='d-inline-block ms-2 mt-1 hover-underline-animation overflow-hidden' style={{whiteSpace:"nowrap" ,textOverflow: 'ellipsis'}}>Shop by Department</h6>
                    </div>
                    <div className='col-8 col-lg-6'>
                        <ul className='d-flex my-0 list-unstyled justify-content-between align-items-center'>
                            <NavLink exact to='/'><li>page1</li></NavLink>
                            <NavLink to='/page2'><li>page2</li></NavLink>
                            <NavLink to='/page3'><li>page3</li></NavLink>
                            <NavLink to='/page4'><li>page4</li></NavLink>
                            <NavLink to='/page5'><li>page5</li></NavLink>
                            <NavLink to='/page6'><li>page6</li></NavLink>
                            <NavLink to='/page7'><li>page7</li></NavLink>
                            <NavLink to='/page8'><li>page8</li></NavLink>
                            <NavLink to='/page9'><li>page9</li></NavLink>
                            <NavLink to='/page10'><li>page10</li></NavLink> 
                        </ul>
                    </div>
                    <div className='sell col-lg-4'>
                            <div className='d-flex justify-content-end'>
                                <span>Sell on Shopmart</span>
                                <span>Tract your order</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>


        
    </>
  )
}

export default HeaderBottom