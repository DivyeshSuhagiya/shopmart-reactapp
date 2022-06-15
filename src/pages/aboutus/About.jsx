import React from 'react'
import './About.css'
import about_1 from '../../assets/images/about/1.jpg'
import about_2 from '../../assets/images/about/2.jpg'
import about_3 from '../../assets/images/about/3.jpg'
import about_4 from '../../assets/images/about/4.jpg'
import about_5 from '../../assets/images/about/5.jpg'
import about_6 from '../../assets/images/about/6.jpg'
import about_7 from '../../assets/images/about/7.jpg'
import NewSletter from '../../components/newSletter/NewSletter'
import ProductLinks from '../../components/productLinks/ProductLinks'
import Footer from '../../components/footer/Footer'
import ContactLinks from '../../components/contactLinks/ContactLinks'

function About() {
    
    return (
        <>
            <div>
                <div className='about-img'></div>
                <div className='py-5 px-3'>
                    <h2>Meet Out Leaders</h2>
                    <div className='row g-4 py-3 text-center'>
                        <div className='col-6 col-lg-3 col-sm-4'>
                            <div className="content">
                                <div className="content-overlay"></div>
                                <img src={about_1} alt="" className='img-fluid' />
                                <div className="content-details fadeIn-top">
                                    <h6>Robert Downey Jr</h6>
                                    <p>CEO Fouder</p>
                                    <div>
                                        <i className='bx bxl-facebook bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}  ></i>
                                        <i className='bx bxl-twitter bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}  ></i>
                                        <i className='bx bxl-google-plus bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}></i>
                                        <i className='bx bxl-instagram bx-sm cursor-pointer' style={{ color: 'black' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 col-lg-3 col-sm-4'>
                            <div className="content">
                                <div className="content-overlay"></div>
                                <img src={about_2} alt="" className='img-fluid' />
                                <div className="content-details fadeIn-top">
                                    <h6>Robert Downey Jr</h6>
                                    <p>CEO Fouder</p>
                                    <div>
                                        <i className='bx bxl-facebook bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}  ></i>
                                        <i className='bx bxl-twitter bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}  ></i>
                                        <i className='bx bxl-google-plus bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}></i>
                                        <i className='bx bxl-instagram bx-sm cursor-pointer' style={{ color: 'black' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 col-lg-3 col-sm-4'>
                            <div className="content">
                                <div className="content-overlay"></div>
                                <img src={about_3} alt="" className='img-fluid' />
                                <div className="content-details fadeIn-top">
                                    <h6>Robert Downey Jr</h6>
                                    <p>CEO Fouder</p>
                                    <div>
                                        <i className='bx bxl-facebook bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}  ></i>
                                        <i className='bx bxl-twitter bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}  ></i>
                                        <i className='bx bxl-google-plus bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}></i>
                                        <i className='bx bxl-instagram bx-sm cursor-pointer' style={{ color: 'black' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 col-lg-3 col-sm-4'>
                            <div className="content">
                                <div className="content-overlay"></div>
                                <img src={about_4} alt="" className='img-fluid' />
                                <div className="content-details fadeIn-top">
                                    <h6>Robert Downey Jr</h6>
                                    <p>CEO Fouder</p>
                                    <div>
                                        <i className='bx bxl-facebook bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}  ></i>
                                        <i className='bx bxl-twitter bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}  ></i>
                                        <i className='bx bxl-google-plus bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}></i>
                                        <i className='bx bxl-instagram bx-sm cursor-pointer' style={{ color: 'black' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 col-lg-3 col-sm-4'>
                            <div className="content">
                                <div className="content-overlay"></div>
                                <img src={about_5} alt="" className='img-fluid' />
                                <div className="content-details fadeIn-top">
                                    <h6>Robert Downey Jr</h6>
                                    <p>CEO Fouder</p>
                                    <div>
                                        <i className='bx bxl-facebook bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}  ></i>
                                        <i className='bx bxl-twitter bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}  ></i>
                                        <i className='bx bxl-google-plus bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}></i>
                                        <i className='bx bxl-instagram bx-sm cursor-pointer' style={{ color: 'black' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 col-lg-3 col-sm-4'>
                            <div className="content">
                                <div className="content-overlay"></div>
                                <img src={about_6} alt="" className='img-fluid' />
                                <div className="content-details fadeIn-top">
                                    <h6>Robert Downey Jr</h6>
                                    <p>CEO Fouder</p>
                                    <div>
                                        <i className='bx bxl-facebook bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}  ></i>
                                        <i className='bx bxl-twitter bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}  ></i>
                                        <i className='bx bxl-google-plus bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}></i>
                                        <i className='bx bxl-instagram bx-sm cursor-pointer' style={{ color: 'black' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 col-lg-3 col-sm-4'>
                            <div className="content">
                                <div className="content-overlay"></div>
                                <img src={about_7} alt="" className='img-fluid' />
                                <div className="content-details fadeIn-top">
                                    <h6>Robert Downey Jr</h6>
                                    <p>CEO Fouder</p>
                                    <div>
                                        <i className='bx bxl-facebook bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}  ></i>
                                        <i className='bx bxl-twitter bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}  ></i>
                                        <i className='bx bxl-google-plus bx-sm pe-1 cursor-pointer' style={{ color: 'black' }}></i>
                                        <i className='bx bxl-instagram bx-sm cursor-pointer' style={{ color: 'black' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-5 px-3' style={{ backgroundColor: "rgb(245, 245, 245)" }}>
                    <h2 className='mb-4'>Awards & Recognition</h2>
                    <p className='text-muted'>Industry leaders and influencers recognize Overstock as one of the most trust worthy retail companies in the U.S., ranking high for both customer and employee satisfaction.</p>
                </div>

                <NewSletter />
                <ContactLinks />
                <ProductLinks />
                <Footer />
            </div>
        </>
    )
}

export default About