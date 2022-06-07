import React from "react";
import Slider from "react-slick";
import ProductComponent from '../productComponent/ProductComponent'
import './Testimonial.css'
import cateImg1 from '../../assets/images/1.jpg'
import cateImg2 from '../../assets/images/2.jpg'
import cateImg3 from '../../assets/images/3.jpg'
import cateImg4 from '../../assets/images/4.jpg'
import cateImg5 from '../../assets/images/5.jpg'
import cateImg6 from '../../assets/images/6.jpg'
import cateImg7 from '../../assets/images/7.jpg'
import cateImg8 from '../../assets/images/8.jpg'

function Testimonial() {
    const ComponentList = {
        ProductComponent
    }
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
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
    return (
        <>
            <Slider {...settings} className='py-3'>
                {
                    imageObj.map(x => {
                        return(
                            <ProductComponent images={x.image}/>
                        )
                    })
                }
                {/* {props.DealOfTheDay}
                {props.DealOfTheDay}
                {props.DealOfTheDay}
                {props.DealOfTheDay}
                {props.DealOfTheDay}
                {props.DealOfTheDay}
                {props.DealOfTheDay}
                {props.DealOfTheDay}
                {props.DealOfTheDay}
                {props.DealOfTheDay}
                {props.DealOfTheDay}
                {props.DealOfTheDay}
                {props.CustomerElectronic}
                {props.CustomerElectronic}
                {props.CustomerElectronic}
                {props.CustomerElectronic}
                {props.CustomerElectronic}
                {props.CustomerElectronic}
                {props.Clothing}
                {props.Clothing}
                {props.Clothing}
                {props.Clothing}
                {props.Clothing}
                {props.Clothing}
                {props.Clothing}
                {props.Kitchen}
                {props.Kitchen}
                {props.Kitchen}
                {props.Kitchen}
                {props.Kitchen}
                {props.Kitchen}
                {props.Kitchen}
                {props.Kitchen}
                {props.aa} */}
                {/* <AAA /> */}
            </Slider>
        </>
    )
}

export default Testimonial
