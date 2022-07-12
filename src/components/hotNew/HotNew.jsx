import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Rating } from 'react-simple-star-rating'
import { fetchProduct } from '../../redux/actions/productaction'
import Testimonial from '../testimonial/Testimonial'

function HotNew(props) {

    const product = useSelector(state => state.product.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])
    

    return (
        <>
            <div className='py-5'>
                <Testimonial DealOfTheDay={
                    product.slice(0,8).filter(x => x)?.map((x, i) => {
                        return (
                            <div className="card border-0 py-2" key={i}>
                                <div className="row g-0">
                                    <div className="col-md-4" >
                                        <img src={x.productImage} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body text-start">
                                            <p className='p-0 m-0 product-name' style={{ fontSize: "14px" }}>{x.productName}</p>
                                            <Rating className="pb-2 " readonly="true" size='20' initialValue="0" allowHalfIcon="true" allowHover="false" ratingValue={80} />
                                            <h6>₹{x.offerPrice}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                } />
            </div>

        </>
    )
}

export default HotNew