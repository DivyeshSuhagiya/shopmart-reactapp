import React from 'react'
import { NavLink } from 'react-router-dom'

function PageCategories() {
  return (
    <>
        <div className='p-3' style={{backgroundColor:"rgb(245, 245, 245)"}}>
            <h5 className='mb-4'>CATEGORIES</h5>
            <NavLink to='/Cloth'><p className='text-muted m-0 my-2'>Clothing</p></NavLink>
            <NavLink to='/Kitchen'><p className='text-muted m-0 my-2'>Kitchen</p></NavLink>
            <NavLink to='/Electronics'><p className='text-muted m-0 my-2'>Electrics</p></NavLink>
            <NavLink to='/'><p className='text-muted m-0 my-2'>Beauty</p></NavLink>
            <NavLink to='/Mobiles'><p className='text-muted m-0 my-2'>Computers</p></NavLink>
            <NavLink to='/Jewelry'><p className='text-muted m-0 my-2'>Jewelry</p></NavLink>
            <NavLink to='/Mobiles'><p className='text-muted m-0 my-2'>Mobiles</p></NavLink>
            <NavLink to='/'><p className='text-muted m-0 my-2'>Sports</p></NavLink>
            <NavLink to='/'><p className='text-muted m-0 my-2'>Books</p></NavLink>
            <NavLink to='/Shoes'><p className='text-muted m-0 my-2'>Shoes</p></NavLink>
            <NavLink to='/'><p className='text-muted m-0 my-2'>Cars</p></NavLink>
            <NavLink to='/Babies'><p className='text-muted m-0 my-2'>Babies</p></NavLink>
        </div>
    </>
  )
}

export default PageCategories