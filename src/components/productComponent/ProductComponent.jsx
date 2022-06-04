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
import { FaRegHeart, FaShopify } from 'react-icons/fa'

function ProductComponent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [rating, setRating] = useState(90)
    const handleRating = (rate) => {
        setRating(rate)
    }

    return (
        <>
            <div>
                <Card className='product-card overflow-hidden p-2 m-2 border-0'>
                    <Badge bg="warning" className='p-2 fs-6' style={{ position: "absolute", right: "5px", top: "5px", zIndex: 99 }}>-18%</Badge>{' '}
                    <Card.Img height={280} width={280} variant="top" src={img1} className="py-0 img-fluid" />
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
                            <span className='text-danger' style={{ fontSize: "16px" ,textOverflow: 'ellipsis' ,whiteSpace: 'nowrap' , overflow: 'hidden'}}>18% off</span>
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


                <Modal
                    size='xl'
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    dialogClassName="modal-90w">
                    <Modal.Header closeButton>
                        <Modal.Body >
                            <Container >
                                <Row>
                                    <Col xs={6} md={4}>
                                        <h4>Quickview</h4>
                                        <img src={img1} alt="" />
                                    </Col>
                                    <Col xs={12} md={8}>
                                        <p class="fs-4 text-dark-50">Korea Long Sofa Fabric In Blue Navy Color</p>
                                        <p>Brand :<span class="text-info fs-6"> Youngshop </span> | <Rating onClick={handleRating} className="pb-2 " readonly="true" size='24' initialValue="0" allowHalfIcon="true" allowHover="false" ratingValue={rating} /><span>(1 review)</span></p><hr />
                                        <span className='pe-2 text-danger fw-bold fs-5'>$670.2</span>
                                        <span className=' text-muted pe-3 pb-3' style={{ fontWeight: "500", fontSize: "18px", textDecoration: "line-through" }}>$568.8</span>
                                        <p><span> Sold By : </span><h5 class="d-inline-block text-primary"> YOUNGSHOP</h5></p>
                                        <ul class="text-secondary">
                                            <li>Unrestrained and portable active stereo speaker</li>
                                            <li>Free from the confines of wires and chords</li>
                                            <li>20 hours of portable capabilities</li>
                                            <li>Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
                                            <li>3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                                        </ul><hr />
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                    </Modal.Header>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default ProductComponent