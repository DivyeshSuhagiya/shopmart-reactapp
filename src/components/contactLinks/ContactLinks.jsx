import React from 'react'
import './ContactLinks.css'

function ContactLinks() {
    return (
        <>
            <div className='contact-links pt-5 px-3'>
                <div className='row align-items-start'>
                    <div className='col-12 col-md-5 mb-5'>
                        <h6 className='fw-bold mb-4'>Contact Us</h6>
                        <p>Call us 24/7</p>
                        <h4 className='my-2 fw-bold' style={{ color: "#FCB800" }}>1800 97 97 69</h4>
                        <p>502 New Design Str, Melbourne, Australia contact@martfury.co</p>
                        <div className='mt-4'>
                            <i class='bx bxl-facebook bx-sm pe-2' style={{ color: '#2a3b96' }}  ></i>
                            <i class='bx bxl-twitter bx-sm pe-2' style={{ color: '#3e93de' }}  ></i>
                            <i class='bx bxl-google-plus bx-sm pe-2' style={{ color: '#e41717' }}  ></i>
                            <i class='bx bxl-instagram bx-sm pe-2' style={{ color: '#e41780' }}  ></i>
                        </div>
                    </div>
                    <div className='col-4 col-md-2 mb-5'>
                        <h6 className='fw-bold mb-4'>Contact Us</h6>
                        <p>Policy</p>
                        <p>Term & Condition</p>
                        <p>Shipping</p>
                        <p>Return</p>
                        <p>FAQs</p>
                    </div>
                    <div className='col-4 col-md-2 mb-5'>
                        <h6 className='fw-bold mb-4'>Company</h6>
                        <p>About Us</p>
                        <p>Affilate</p>
                        <p>Career</p>
                        <p>Contact</p>
                    </div>
                    <div className='col-4 col-md-2 mb-5'>
                        <h6 className='fw-bold mb-4'>Bussiness</h6>
                        <p>Our Press</p>
                        <p>Checkout</p>
                        <p>My account</p>
                        <p>Shop</p>   
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default ContactLinks