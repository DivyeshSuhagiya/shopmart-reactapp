import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../redux/actions/productaction'
import ProductComponent from '../productComponent/ProductComponent'
import Testimonial from '../testimonial/Testimonial'

function Clothing(props) {

  const product = useSelector(state => state.product.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])

  return (
    <>
      <div className='py-5 px-3'>
        <h4 className='p-3' style={{ backgroundColor: "var(--light-gray)" }}>Clothings</h4>
        <Testimonial DealOfTheDay={
          product.slice(7,13).filter(x => x.category === "Cloth")?.map((x, i) => {
            return (
              <div className='col-6 col-md-4 col-lg-3 p-0' key={i}>
                <ProductComponent images={x.productImage} shopName={x.shopName} price={x.price} yourPrice={x.offerPrice} discount={x.discount} productName={x.productName} id={x._id} />
              </div>
            )
          })
        } />
      </div>
    </>
  )
}

export default Clothing