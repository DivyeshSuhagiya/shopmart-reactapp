import React from "react";
import Slider from "react-slick";
import './Testimonial.css'

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
                {props.MonthCategoies}
            </Slider>
        </>
    )
}

export default Testimonial
