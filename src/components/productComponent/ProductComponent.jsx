import React from 'react'
import './ProductComponent.css'
import img1 from "../../assets/images/5.jpg"
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'react-slideshow-image/dist/styles.css'
import { Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { BiShow } from "react-icons/bi";
import { Button } from 'react-bootstrap';
import { BsEye } from "react-icons/bs"
import { FaRegHeart, FaShopify , FaFacebookSquare ,FaGooglePlusSquare , FaTwitterSquare , FaLinkedin } from 'react-icons/fa'

function ProductComponent(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [rating, setRating] = useState(90)
    const handleRating = (rate) => {
        setRating(rate)
    }

    // var base64img = props.images;
    // function Base64ToImage(base64img, callback) {
    //   let img = new Image();
    //   img.onload = function () {
    //     callback(img);
    //   };
    //   img.src = base64img;
    // }
    // Base64ToImage(base64img, function (img) {
    //     // document.getElementById('main').appendChild(img);
    //   let log = "w=" + img.width + " h=" + img.height;
    //   console.log(img);
    // });
    return (
        <>
            <div>
                <Card className='product-card overflow-hidden p-2 m-2 border-0'>
                    <Badge bg="warning" className='p-2 fs-6' style={{ position: "absolute", right: "5px", top: "5px", zIndex: 99 }}>-18%</Badge>{' '}
                    <Card.Img height={280} width={280} variant="top" src={props.images} className="py-0 img-fluid" />
                    <Card.Body className="mt-3 pt-0 card-body per position-relative " style={{ zIndex: "200" }}>
                        <div class="child  w-100 text-muted  py-1 position-absolute text-center" style={{ height: "35px" }}>
                            <FaRegHeart className='product-icon mx-1' />
                            <FaShopify className='product-icon mx-1' />
                            <BsEye className="product-icon mx-1" style={{ cursor: "pointer" }} onClick={handleShow} />
                        </div>
                        <Card.Title style={{ fontSize: "14px" }}>YOUNG SHOP</Card.Title><hr />
                        <div>
                            <span className='pe-2 text-success fw-bold fs-6'>$670.2</span>
                            <span className='text-muted pe-2' style={{ fontWeight: "500", textDecoration: "line-through", fontSize: "14px" }}>$568.8</span>
                            <span className='text-danger' style={{ fontSize: "16px", textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>18% off</span>
                        </div>
                        <div className='product-name mb-0 mt-3' style={{ fontSize: "14px" }}>
                            Korea Long Sofa Fabric In Blue Navy Color
                        </div>
                        <Rating onClick={handleRating} className="pb-2 " readonly="true" size='20' initialValue="0" allowHalfIcon="true" allowHover="false" ratingValue={rating} />
                        <ProgressBar now={rating} variant="warning" style={{ height: "12px" }} />
                        <div className='sold pt-2 text-muted'>
                            Sold: 22
                        </div>
                    </Card.Body>
                </Card>


                <Modal show={show} size="xl" onHide={handleClose} className="p-0" >
                    <Modal.Header closeButton className='border-0'>
                        <h4>Quickview</h4>
                    </Modal.Header>
                    <Modal.Body className='pb-5'>
                        <div className='product-modal row align-items-start'>
                            <div className='col-12 col-lg-5 d-flex justify-content-center align-items-center'>
                                <img src={img1} alt="" width="300px" />
                            </div>
                            <div className='col-12 col-lg-7'>
                                <h3>MVMTH Classical Leather Watch In Black</h3>
                                <div className='d-flex align-items-center'>
                                    <p className='p-0 m-0'>Brand: <span className='text-primary'>Young Shop</span> | <Rating onClick={handleRating} className="ms-2 pb-2 " readonly="true" size='22' initialValue="0" allowHalfIcon="true" allowHover="false" ratingValue={rating} /></p>
                                </div>
                                <hr className='m-0' />

                                <div className='mt-3'>
                                    <h6><del className='text-muted'>&57.99</del><h4 className='d-inline ms-2 text-danger fw-bold'>$62.99</h4></h6>
                                </div>
                                <div className='mt-3'>
                                    <p className='m-0 mb-2'>Sold By: <span className='text-primary fw-bold'>YOUNGSHOP</span></p>
                                    <ul className='text-muted'>
                                        <li className='mb-1'>Unrestrained and portable active stereo speaker</li>
                                        <li className='mb-1'>Free from the confines of wires and chords</li>
                                        <li className='mb-1'>20 hours of portable capabilities</li>
                                        <li className='mb-1'>Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
                                        <li className='mb-1'>3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                                    </ul>
                                    <hr />
                                </div>
                                <div>
                                    <p>Quantity</p>
                                    <div>
                                        <div className='d-inline-block me-2'>
                                            <div class="input-group mb-3 border-1" style={{ width: "100px" }} >
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text cursor-pointer">-</span>
                                                </div>
                                                <input type="text" className="border-0 form-control" aria-label="Amount (to the nearest dollar)" value="1" />
                                                <div class="input-group-append">
                                                    <span class="input-group-text cursor-pointer">+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className='product-add-btn mb-2'>Add to cart</button>
                                        <div>
                                            <button className='w-100 product-shopnow-btn'>Buy Now</button>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div>
                                    <p className='m-0'>Report Abuse</p>
                                    <p className='m-0'>SKU: SF1133569600-1</p>
                                    <p className='m-0'>Categories: <span className='text-primary'>Consumer ElectronicsRefrigeratorBabies & Moms</span></p>
                                    <p className='m-0'>Tags : sofa , technologies , wireless</p>  

                                    <div className='mt-3'>
                                        <FaFacebookSquare size="35px" style={{color:"#0f455c"}} />
                                        <FaTwitterSquare size="35px" style={{color:"#13a3ad"}} />
                                        <FaGooglePlusSquare size="35px" className='text-danger' />
                                        <FaLinkedin size="35px" style={{color:"#146385"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

            </div>
        </>
    )
}

export default ProductComponent