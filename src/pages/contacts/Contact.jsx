import React from 'react'
import ContactLinks from '../../components/contactLinks/ContactLinks'
import Footer from '../../components/footer/Footer'
import NewSletter from '../../components/newSletter/NewSletter'
import ProductLinks from '../../components/productLinks/ProductLinks'

function Contact() {
    return (
        <>
            <div className='py-3'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.6372758657!2d72.6822082454725!3d21.15946270419639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1655269332522!5m2!1sen!2sin" width="100%" height="500" style={{ border: "0px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='py-5'>
                <h2 className='text-center fw-bold'>Contact Us For Any Questions</h2>
                <div className='container py-4'>
                    <div className='row g-4 text-center'>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <h5 className='fw-bold'>Contact Directly</h5>
                            <p className='text-muted'>contact@martfury.com <br />(+004) 912-3548-07</p>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <h5 className='fw-bold'>Head Quater</h5>
                            <p className='text-muted'>17 Queen St, Southbank, Melbourne <br /> 10560, Australia</p>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <h5 className='fw-bold'>Work With Us</h5>
                            <p className='text-muted'>Send your CV to our email: <br /> career@martfury.com</p>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <h5 className='fw-bold'>Customer Service</h5>
                            <p className='text-muted'>customercare@martfury.com<br />(800) 843-2446</p>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <h5 className='fw-bold'>Media Relations</h5>
                            <p className='text-muted'>media@martfury.com<br />(801) 947-3564</p>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4'>
                            <h5 className='fw-bold'>Vendor Support</h5>
                            <p className='text-muted'>vendorsupport@martfury.com<br />(801) 947-3100</p>
                        </div>
                    </div>
                </div>
            </div>

            <NewSletter />
            <ContactLinks />
            <ProductLinks />
            <Footer />
        </>
    )
}

export default Contact