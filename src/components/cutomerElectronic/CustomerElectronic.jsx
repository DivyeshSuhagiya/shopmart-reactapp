import React from 'react'
import Testimonial from '../testimonial/Testimonial'

function CustomerElectronic(props) {
  return (
    <>
        <div className='py-5 px-3'>
            <h4 className='p-3' style={{backgroundColor:"var(--light-gray)"}}>Customer Electronics</h4>
            <Testimonial CustomerElectronic={props.CustomerElectronic} />
        </div>
    </>
  )
}

export default CustomerElectronic