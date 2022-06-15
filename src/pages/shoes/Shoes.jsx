import React from 'react'
import Slider from '../../components/sliders/Slider'
import slide1 from '../../assets/images/ee.jpg'
import slide2 from '../../assets/images/ebanner-2.png'
import slide3 from '../../assets/images/ebanner-3.png'
import ProductComponent from '../../components/productComponent/ProductComponent'
import cateImg1 from '../../assets/images/1.jpg'
import cateImg2 from '../../assets/images/2.jpg'
import cateImg3 from '../../assets/images/3.jpg'
import cateImg4 from '../../assets/images/4.jpg'
import cateImg5 from '../../assets/images/5.jpg'
import cateImg6 from '../../assets/images/6.jpg'
import cateImg7 from '../../assets/images/7.jpg'
import cateImg8 from '../../assets/images/8.jpg'
import PageCategories from '../../components/pagecategory/PageCategories'
import NewSletter from '../../components/newSletter/NewSletter'
import ContactLinks from '../../components/contactLinks/ContactLinks'
import ProductLinks from '../../components/productLinks/ProductLinks'
import Footer from '../../components/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProduct } from '../../redux/actions/productaction'

function Shoes() {
    const arr = useSelector(state => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    const imageObj = [
        { image: cateImg1, name: "Electronics" },
        { image: cateImg2, name: "Clothings" },
        { image: cateImg3, name: "Computers" },
        { image: cateImg4, name: "Home & Kitchen" },
        { image: cateImg5, name: "Health & Beauty" },
        { image: cateImg6, name: "Watch" },
        { image: cateImg7, name: "Jewelry & watch" },
        { image: cateImg8, name: "Mobiles" }
    ]

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
        {console.log(arr)}
            <Slider slideImages={slideImages} />
            <div className='same-product-page py-5 px-3'>
                <div className='row align-items-start'>
                    <div className='col-3 d-none d-md-block'>
                        <PageCategories />
                    </div>
                    <div className='col-12 col-md-9'>
                        <div className='row'>
                            <h4>Best Sale Items of Shoes</h4>
                            <hr />
                            {
                                imageObj.map(x => {
                                    return (
                                        <div className='col-6 col-md-4 col-lg-3'>
                                            <ProductComponent images={x.image} />
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

export default Shoes