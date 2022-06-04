import React from 'react'
import './SliderMenu.css'

function sliderMenu() {
  return (
    <>
        <div className='slider-menu me-3 border-1' style={{height:"450px"}}>
            <h4 className='text-center' style={{backgroundColor:"#FCB800" , padding :"13px 0px"}}>Categories</h4>
            <p className='ps-3 m-0'>Electronics</p>
            <p className='ps-3 m-0'>Kitchen</p>
            <p className='ps-3 m-0'>Mens</p>
            <p className='ps-3 m-0'>Girls</p>
            <p className='ps-3 m-0'>Health</p>
            <p className='ps-3 m-0'>Watch</p>
            <p className='ps-3 m-0'>Jewelry</p>
            <p className='ps-3 m-0'>Mobiles</p>
            <p className='ps-3 m-0'>Laptop</p>
        </div>
    </>
  )
}

export default sliderMenu