import React from 'react'
import Testimonial from '../testimonial/Testimonial'

function DealOfTheDay(props) {
  return (
    <>
        <div className='py-5 px-3'>
            <h4>Deal of the day</h4>
            <hr />
            <Testimonial DealOfTheDay={props.DealOfTheDay} />
        </div>
    </>
  )
}

export default DealOfTheDay