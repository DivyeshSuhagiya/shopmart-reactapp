import React, { useEffect } from 'react'
import Slider from '../../components/sliders/Slider'
import SliderMenu from '../../components/sliderMenu/SliderMenu'
import Services from '../../components/services/Services'
import Page1Offer from '../../components/page1Offer/Page1Offer'
import MonthCategoies from '../../components/monthCategory/MonthCategoies'
import cateImg1 from '../../assets/images/1.jpg'
import cateImg2 from '../../assets/images/2.jpg'
import cateImg3 from '../../assets/images/3.jpg'
import cateImg4 from '../../assets/images/4.jpg'
import cateImg5 from '../../assets/images/5.jpg'
import cateImg6 from '../../assets/images/6.jpg'
import cateImg7 from '../../assets/images/jewelry/1.jpg'
import cateImg8 from '../../assets/images/8.jpg'
import offerImage1 from '../../assets/images/offerImage1.jpeg'
import offerImage2 from '../../assets/images/offerImage2.jpeg'
import Subscribe from '../../components/subscribe/Subscribe'
import ProductComponent from '../../components/productComponent/ProductComponent'
import Testimonial from '../../components/testimonial/Testimonial'
import DealOfTheDay from '../../components/dealOfTheDay/DealOfTheDay'
import CustomerElectronic from '../../components/cutomerElectronic/CustomerElectronic'
import Clothing from '../../components/clothing/Clothing'
import HotNew from '../../components/hotNew/HotNew'
import NewSletter from '../../components/newSletter/NewSletter'
import ContactLinks from '../../components/contactLinks/ContactLinks'
import ProductLinks from '../../components/productLinks/ProductLinks'
import Footer from '../../components/footer/Footer'
import slide1 from '../../assets/images/slide-1.jpg'
import slide2 from '../../assets/images/slide-2.jpg'
import slide3 from '../../assets/images/slide-3.jpg'
import HomeKitchen from '../../components/home kithcen/HomeKitchen'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../../redux/actions/productaction'
function Page1() {

    const dispatch = useDispatch();
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
            <div className='mySlider'>
                <div className='row p-3'>
                    <div className='col-12 col-lg-3 p-0 d-none d-lg-block' >
                        <SliderMenu />
                    </div>
                    <div className='col-12 col-lg-9 p-0'>
                        <Slider slideImages={slideImages} />
                    </div>
                </div>
            </div>


            <Services />

            <DealOfTheDay />


            <Page1Offer />


            <div className='p-3'>
                <h4 className='mb-0 mt-3'>Top Categories Of The Month</h4>
                <div className='row text-center g-4'>

                    <Testimonial
                        MonthCategoies={
                            imageObj.map((x, i) => {
                                return (
                                    <div className=' monthCate col-6 col-lg-2 col-md-3' >
                                        <div className='border-1 m-2 p-3' key={i}>
                                            <MonthCategoies images={x.image} name={x.name} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    />
                </div>
            </div>

            <CustomerElectronic />

            <Clothing />

            <HomeKitchen Kitchen={<ProductComponent />} />


            <div className='p-3'>
                <div className='row g-3'>
                    <div className='col-12 col-lg-8'>
                        <img src={offerImage1} alt="" className='img-fluid' />
                    </div>
                    <div className='col-12 col-lg-4'>
                        <img src={offerImage2} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>

            <Subscribe />

            <HotNew />

            <NewSletter />
            <ContactLinks />
            <ProductLinks />
            <Footer />
        </>
    )
}

export default Page1