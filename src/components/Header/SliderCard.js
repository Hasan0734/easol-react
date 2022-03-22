import React from 'react';
import Class from './Header.module.css'
import HeaderCard from './HeaderCard';
const SliderCard = () => {
    return (
        <>
            <div>
                <div className='row px-2'>
                    <div className='col-sm-12 col-md-12 col-lg-6 p-4 py-3'>
                        <div className='mt-5'>
                            <h1 className={Class.header__title}>
                                Discover
                                The New Way
                                To Sell Experiences
                            </h1>
                            <p className={Class.header__text}>Easol is the all-in-one platform for managing your entire experience business, on your terms. Sell directly on your own website with smart booking, payment, and marketing tools that all work together, brilliantly.</p>
                            <p className={Class.scroll__top}><i class="fa-solid fa-arrow-down-long"></i> <span>Scroll tp learn more</span></p>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 '>
                        <HeaderCard />
                    </div>
                </div>
            </div>
        
        </>
    );
};

export default SliderCard;