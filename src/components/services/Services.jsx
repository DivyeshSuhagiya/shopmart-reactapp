import React from 'react'
import './Services.css'

function Services() {
    return (
        <div className='services_main m-4'>
            <div className='row text-center g-4'>
                <div className='col-6 col-lg col-md-4 m-0 my-4'>
                    <div>
                        <i class='bx bx-rocket bx-flashing-hover bx-lg mb-3' style={{ color: "#FCB800" }} ></i>
                        <h5 className='m-0'>Free Delivery</h5>
                        <p className='m-0 text-muted'>For all oders over $99</p>
                    </div>
                </div>
                <div className='col-6 col-lg col-md-4 m-0 my-4'>
                    <div>
                        <i class='bx bx-sync bx-lg mb-3 bx-spin-hover' style={{ color: "#FCB800" }} ></i>
                        <h5 className='m-0'>90 Days Return</h5>
                        <p className='m-0 text-muted'>If goods have problems</p>
                    </div>
                </div>
                <div className='col-6 col-lg col-md-4 m-0 my-4'>
                    <div>
                        <i class='bx bx-credit-card-front bx-burst-hover bx-lg mb-3' style={{ color: "#FCB800" }} ></i>
                        <h5 className='m-0'>Secure Payment</h5>
                        <p className='m-0 text-muted'>100% secure payment</p>
                    </div>
                </div>
                <div className='col-6 col-lg col-md-4 m-0 my-4'>
                    <div>
                        <i class='bx bx-message-rounded-check bx-fade-up-hover bx-lg mb-3' style={{ color: "#FCB800" }}></i>
                        <h5 className='m-0'>24/7 Support</h5>
                        <p className='m-0 text-muted'>Dedicated support</p>
                    </div>
                </div>
                <div className='col-6 col-lg col-md-4 m-0 my-4'>
                    <div>
                        <i class='bx bx-gift bx-lg mb-3 bx-tada-hover' style={{ color: "#FCB800" }}></i>
                        <h5 className='m-0'>Gift Service</h5>
                        <p className='m-0 text-muted'>Support gift service</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services