import React from 'react'
import Slider from '../../components/sliders/Slider'
import slide1 from '../../assets/images/ee.jpg'
import slide2 from '../../assets/images/ebanner-2.png'
import slide3 from '../../assets/images/ebanner-3.png'
import ProductComponent from '../../components/productComponent/ProductComponent'
import PageCategories from '../../components/pagecategory/PageCategories'
import NewSletter from '../../components/newSletter/NewSletter'
import ContactLinks from '../../components/contactLinks/ContactLinks'
import ProductLinks from '../../components/productLinks/ProductLinks'
import Footer from '../../components/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProduct } from '../../redux/actions/productaction'

function Electronics() {

    const electronics = useSelector(state => state.product.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])

    const slideImages = [
        {
            url: slide1,
            caption: 'SCADINAVIAN COLLECTION FOR YOUR BEDROOM JUST'
        },
        {
            url: slide2,
            caption: 'SCADINAVIAN COLLECTION FOR YOUR BEDROOM JUST'
        },
        {
            url: slide3,
            caption: 'SCADINAVIAN COLLECTION FOR YOUR BEDROOM JUST'
        },
    ];
    return (
        <>
        {
            // console.log(electronics.filter(x => x.category === "Electronics").map(x => x.productImage))
        }
            <Slider slideImages={slideImages} />
            <div className='same-product-page py-5 px-3'>
                <div className='row align-items-start'>
                    <div className='col-3 d-none d-md-block'>
                        <PageCategories />
                    </div>
                    <div className='col-12 col-md-9 p-0'>
                        <div className='row'>
                            <h4>Best Sale Items of Electronics</h4>
                            <hr />
                            {
                                electronics.filter(x => x.category === "Electronics")?.map(x => {
                                    return (
                                        <div className='col-6 col-md-4 col-lg-3 p-0'>
                                            <ProductComponent images={x.productImage} shopName={x.shopName} price={x.price} yourPrice={x.offerPrice} discount={x.discount} productName={x.productName} id={x._id} />
                                        </div>
                                    )
                                })
                            }
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

export default Electronics