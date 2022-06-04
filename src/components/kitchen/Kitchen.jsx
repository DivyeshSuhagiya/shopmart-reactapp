import React from 'react'
import Testimonial from '../testimonial/Testimonial'

function Kitchen(props) {
  return (
    <>
        <div className='py-5 px-3'>
            <h4 className='p-3' style={{backgroundColor:"var(--light-gray)"}}>Kitchen</h4>
            <Testimonial Kitchen={props.Kitchen} />
        </div>
    </>
  )
}

export default Kitchen