import React from 'react'
import OfferImage1 from '../../assets/images/offer1.jpeg'
import OfferImage2 from '../../assets/images/offer2.jpeg'
import OfferImage3 from '../../assets/images/offer3.jpeg'

function Page1Offer() {
  return (
    <>
        <div className='p-3'>
            <div className='row g-4 text-center'>
                <div className='col-12 col-md-6 col-lg-4 m-0 my-3'>
                    <img src={OfferImage1} alt="" className='img-fluid'/>
                </div>
                <div className='col-12 col-md-6 col-lg-4 m-0 my-3'>
                    <img src={OfferImage2} alt="" className='img-fluid'/>
                </div>
                <div className='col-12 col-md-6 col-lg-4 m-0 my-3'>
                    <img src={OfferImage3} alt="" className='img-fluid'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Page1Offer