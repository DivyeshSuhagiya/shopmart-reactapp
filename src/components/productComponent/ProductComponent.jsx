import React, { useEffect } from 'react'
import './ProductComponent.css'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'react-slideshow-image/dist/styles.css'
import Modal from 'react-bootstrap/Modal'
import { BsEye } from "react-icons/bs"
import { FaRegHeart, FaShopify , FaFacebookSquare ,FaGooglePlusSquare , FaTwitterSquare , FaLinkedin } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../redux/actions/productaction'

function ProductComponent(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [rating, setRating] = useState(90)

    const product = useSelector(state => state.product.product)
    const dispatch = useDispatch()
    
    useEffect(() => {
        // dispatch(fetchProduct())
    }, [])

    const handleRating = (rate) => {
        setRating(rate)
    }


    const productObj = product?.find(x=> x._id === props.id)
    return (
        <>
            <div>
                <div className='card product-card overflow-hidden p-2 m-1 mb-3 border-0 h-100' style={{height:'100% !important'}} onClick={handleShow}>
                    <Badge bg="warning" className='p-2 fs-6' style={{ position: "absolute", right: "5px", top: "5px", zIndex: 99 }}>-{props.discount}%</Badge>{' '}
                    {/* <Card.Img variant="top" src={props.images} className="py-0 img-fluid"/> */}
                    <div>
                        <img src={props.images} alt="" className='w-100 img-fluid' height="280px" />
                    </div>
                    <Card.Body className="mt-3 pt-0 card-body per position-relative" style={{ zIndex: "200" }}>
                        <div className="child  w-100 text-muted  py-1 position-absolute text-center" style={{ height: "35px" }}>
                            <FaRegHeart className='product-icon mx-1' />
                            <FaShopify className='product-icon mx-1' />
                            <BsEye className="product-icon mx-1" style={{ cursor: "pointer" }} onClick={handleShow} />
                        </div>
                        <Card.Title style={{ fontSize: "14px" }}>{props.shopName}</Card.Title><hr className='my-1' />
                        <div>
                            <span className='price pe-2 text-success fw-bold fs-6'>₹{props.yourPrice}</span>
                            <span className='old-price text-muted pe-2' >₹{props.price}</span>
                            <span className='discount text-danger' >{props.discount}% off</span>
                        </div>
                        <div className='product-name mb-0 mt-1' style={{overflow: "hidden" , fontSize: "14px", whiteSpace:"nowrap",textOverflow: "ellipsis" }}>
                            {props.productName}
                        </div>
                        <Rating onClick={handleRating} className="pb-2 " readonly="true" size='20' initialValue="0" allowHalfIcon="true" allowHover="false" ratingValue={rating} />
                        <ProgressBar now={rating} variant="warning" style={{ height: "12px" }} />
                        <div className='sold pt-2 text-muted'>
                            Sold: 22
                        </div>
                    </Card.Body>
                </div>


                
                
                <Modal show={show}  onHide={handleClose} className="p-0" dialogClassName="my-modal">
                    <Modal.Header closeButton className='border-0'>
                        <h4>Quickview</h4>
                    </Modal.Header>
                    <Modal.Body className='pb-5'>
                        <div className='product-modal row align-items-start'>
                            <div className='col-12 col-lg-5 d-flex justify-content-center align-items-center'>
                                <img src={productObj?.productImage} alt="" width="300px" />
                            </div>
                            <div className='col-12 col-lg-7'>
                                <h3>{productObj?.productName}</h3>
                                <div className='d-flex align-items-center'>
                                    <p className='p-0 m-0'>Product: <span className='text-primary'>{productObj?.productName}</span> | <Rating onClick={handleRating} className="ms-2 pb-2 " readonly="true" size='22' initialValue="0" allowHalfIcon="true" allowHover="false" ratingValue={rating} /></p>
                                </div>
                                <hr className='m-0' />

                                <div className='mt-3'>
                                    <h6><del className='text-muted'>₹{productObj?.price}</del><h4 className='d-inline ms-2 text-danger fw-bold'>₹{productObj?.offerPrice}</h4></h6>
                                </div>
                                <div className='mt-3'>
                                    <p className='m-0 mb-2'>Sold By: <span className='text-primary fw-bold'>{productObj?.shopName}</span></p>
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
                                            <div className="input-group mb-3 border-1" style={{ width: "100px" }} >
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text cursor-pointer">-</span>
                                                </div>
                                                <input type="text" className="border-0 form-control" aria-label="Amount (to the nearest dollar)" value="1" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text cursor-pointer">+</span>
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