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

function Testimonial(props) {

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
    return (
        <>
            <Slider {...settings} className='py-3'>
                {props.DealOfTheDay}
                {props.CustomerElectronic}
            </Slider>
        </>
    )
}

export default Testimonial
