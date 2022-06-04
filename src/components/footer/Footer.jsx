import React from 'react'
import { FaCcPaypal, FaGooglePay, FaCcApplePay, FaAmazonPay } from 'react-icons/fa'

function Footer() {
    return (
        <>
            <hr className='m-0'/>
            <div className='row text-center py-3 px-3 d-flex justify-content-between' style={{backgroundColor:"#FCB800"}}>
                <div className='col-12 col-md-6'>
                    <p className='m-0'>© 2021 Shopmart. All Rights Reserved</p>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='row text-center d-flex justify-content-center'>
                        <div className='col-12 col-md-6'>
                            <p className='m-0'>We Using Safe Payment For :</p>
                        </div>
                        <div className='col-12 col-md-6 d-flex justify-content-center'>
                            <FaCcPaypal className='mx-2' size='35px' />
                            <FaGooglePay className='mx-2' size='35px' />
                            <FaCcApplePay className='mx-2' size='35px' />
                            <FaAmazonPay className='mx-2' size='35px' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer