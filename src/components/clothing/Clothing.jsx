import React from 'react'
import Testimonial from '../testimonial/Testimonial'

function Clothing(props) {
  return (
    <>
        <div className='py-5 px-3'>
            <h4 className='p-3' style={{backgroundColor:"var(--light-gray)"}}>Clothings</h4>
            <Testimonial Clothing={props.Clothing} />
        </div>
    </>
  )
}

export default Clothing