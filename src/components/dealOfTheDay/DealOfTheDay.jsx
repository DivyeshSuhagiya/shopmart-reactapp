import React from 'react'
import ProductComponent from '../productComponent/ProductComponent'
import Testimonial from '../testimonial/Testimonial'

function DealOfTheDay(props) {

  // var base64img = props.aa;
  // function Base64ToImage(base64img, callback) {
  //   let img = new Image();
  //   img.onload = function () {
  //     callback(img);
  //   };
  //   img.src = base64img;
  // }
  // Base64ToImage(base64img, function (img) {
  //   let log = "w=" + img.width + " h=" + img.height;
  //   console.log(img);
  // });


  return (
    <>
      <div className='py-5 px-3'>
        <h4>Deal of the day</h4>
        <hr />
        {/* <Testimonial DealOfTheDay={props.DealOfTheDay} /> */}
        <Testimonial />
      </div>
    </>
  )
}

export default DealOfTheDay