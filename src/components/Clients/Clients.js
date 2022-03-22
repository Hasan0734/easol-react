import React from 'react';
import Class from './Clients.module.css'
import Image from '../../assets/client/image1.png'
import Slider from 'react-slick/lib/slider';


const Clients = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "header__slick__dots",
        arrows: false,
    };
    return (
        <section className={Class.client__section}>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h1 className={Class.client__title}>What clients says</h1>
                        <p className={Class.client__text}>Read what clients says about us and about our online banking services that may inspire you</p>
                    </div>
                </div>
                <div className='row mt-5'>
                    <Slider {...settings}>
                        <div>
                            <div className="col-6 ps-4">
                                <div className='pt-4'>
                                    <p className={Class.client__say}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do to eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ya enim ad minim veniam, quis nostrud.</p>
                                </div>
                                <div className={Class.client__info}>
                                    <div className='ms-2'>
                                        <img src={Image} alt="" />
                                    </div>
                                    <div>
                                        <h4 className={Class.client__name}>Mark Adair</h4>
                                        <span className={Class.client__bio}>Businessmen</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="col-6 ps-4">
                                <div className='pt-4'>
                                    <p className={Class.client__say}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do to eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ya enim ad minim veniam, quis nostrud.</p>
                                </div>
                                <div className={Class.client__info}>
                                    <div className='ms-2'>
                                        <img src={Image} alt="" />
                                    </div>
                                    <div>
                                        <h4 className={Class.client__name}>Mark Adair</h4>
                                        <span className={Class.client__bio}>Businessmen</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Clients;