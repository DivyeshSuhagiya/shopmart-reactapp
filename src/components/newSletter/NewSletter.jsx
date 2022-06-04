import React from 'react'

function NewSletter() {
    return (
        <>
            <hr />
            <div className='py-5 px-3'>
                <div className='row'>
                    <div className='col-12 col-md-5'>
                        <h4 className='mb-1'>Newsletter</h4>
                        <p>Subcribe to get information about products and coupons</p>
                    </div>
                    <div className='col-12 col-md-7'>
                        <div class="input-group border-1">
                            <input type="text" class="form-control px-3 py-2" placeholder="Email address"/>
                            <span class="input-group-text fw-bold btn_hover px-3" style={{ backgroundColor: "#FCB800", cursor: "pointer" }}>Subscribe</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default NewSletter