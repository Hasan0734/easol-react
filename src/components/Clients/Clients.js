import React from 'react';
import Class from './Clients.module.css'

import Slider from 'react-slick/lib/slider';
import Card from './Card';


const Clients = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "client__slider__dot",
        arrows: false,
        infinite: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
               
               
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
               
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <section className={Class.client__section}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h1 className={Class.client__title}>What clients says</h1>
                        <p className={Class.client__text}>Read what clients says about us and about our online banking services that may inspire you</p>
                    </div>
                </div>
                <div className=''>
                    <Slider {...settings}>
                       
                        <div className='px-lg-4'>
                            <Card />
                        </div>
                     
                        <div className='px-lg-4'>
                            <Card />
                        </div>
                     
                        <div className='px-lg-4'>
                            <Card />
                        </div>
                     

                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Clients;