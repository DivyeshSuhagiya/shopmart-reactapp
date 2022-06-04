import React from 'react'
import './Subscribe.css'

function Subscribe() {
    return (
        <div className='subscribe my-4'>
            <div className='row h-100 text-center'>
                <div className='col-3'></div>
                <div className='col-12 col-md-6 px-3'>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <p className='fs-2 text-white fw-light m-0'>Subscribe Shopmart Web now!!</p>
                        <p className='fw-light mb-4' style={{ color: "#b8b4b4" }}>Shopping fastly and easily more with our Web. Get a link to order best product</p>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span class="input-group-text fw-bold btn_hover" style={{backgroundColor:"#FCB800" , cursor:"pointer"}} id="basic-addon2">Subscribe</span>
                        </div>
                    </div>
                </div>
                <div className='col-3'></div>
            </div>
        </div>
    )
}

export default Subscribe