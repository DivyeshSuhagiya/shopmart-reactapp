import React from 'react'
import { Rating } from 'react-simple-star-rating'

function HotNew(props) {
    return (
        <>
            <div className="card border-0 py-2">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.images} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start">
                            <p className='p-0 m-0 product-name' style={{fontSize:"14px"}}>Marshall Kilburn Portable Wireless Speaker</p>
                            <Rating className="pb-2 " readonly="true" size='20' initialValue="0" allowHalfIcon="true" allowHover="false" ratingValue={80} />
                            <h6>$42.99</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotNew