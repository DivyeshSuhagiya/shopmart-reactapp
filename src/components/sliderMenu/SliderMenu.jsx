import React from 'react'
import { NavLink } from 'react-router-dom'
import './SliderMenu.css'

function sliderMenu() {
  return (
    <>
        <div className='slider-menu me-3 border-1' style={{height:"450px"}}>
            <h4 className='text-center' style={{backgroundColor:"#FCB800" , padding :"13px 0px"}}>Categories</h4>
            <NavLink to="/Electronics"><p className='ps-3 m-0'>Electronics</p></NavLink>
            <NavLink to="/Kitchen"><p className='ps-3 m-0'>Kitchen</p></NavLink>
            <NavLink to="/Cloth"><p className='ps-3 m-0'>Cloth</p></NavLink>
            <NavLink to="/"><p className='ps-3 m-0'>Health</p></NavLink>
            <NavLink to="/Watches"><p className='ps-3 m-0'>Watch</p></NavLink>
            <NavLink to="/Jewelry"><p className='ps-3 m-0'>Jewelry</p></NavLink>
            <NavLink to="/Shoes"><p className='ps-3 m-0'>Shoes</p></NavLink>
            <NavLink to="/Mobiles"><p className='ps-3 m-0'>Mobiles</p></NavLink>
            <NavLink to="/"><p className='ps-3 m-0'>Laptop</p></NavLink>
        </div>
    </>
  )
}

export default sliderMenu