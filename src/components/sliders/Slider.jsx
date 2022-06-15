import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import slide1 from '../../assets/images/slide-1.jpg'
import slide2 from '../../assets/images/slide-2.jpg'
import slide3 from '../../assets/images/slide-3.jpg'

function slider(props) {
  // const slideImages = [
  //   {
  //     url: slide1,
  //     caption: 'SCADINAVIAN COLLECTION FOR YOUR BEDROOM JUST'
  //   },
  //   {
  //     url: slide2,
  //     caption: 'SCADINAVIAN COLLECTION FOR YOUR BEDROOM JUST'
  //   },
  //   {
  //     url: slide3,
  //     caption: 'SCADINAVIAN COLLECTION FOR YOUR BEDROOM JUST'
  //   },
  // ];
  return (
    <div>
      <Slide transitionDuration='500' arrows={null} >
        {props.slideImages?.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div className='sliderImage' style={{ 'backgroundImage': `linear-gradient(90deg, rgba(0,0,0,0.8), rgba(0 , 0,0,0)), url(${slideImage.url})` }}>
              <div className='row position-relative'>
                <div className='slide-text col-5'>
                  <p style={{ color: 'rgb(46, 104, 175)' }}>Limited Edition</p>
                  <h3 className='text-white fw-light' style={{fontWeight:"400"}}>{slideImage.caption}<span className='ps-2 fw-bold' style={{color : "#26bd30"}}>$599</span></h3>
                  <button className='shopNow btn_hover mt-3'>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}

      </Slide>
    </div>
  )
}

export default slider