import React from 'react';
import image from '../../../assets/group/Group4.png'
import Class from './BuySell.module.css'
const BuySell = () => {
    return (
        <div className='row service__margin flex-column-reverse flex-lg-row'>
             <div className='col-sm-12 col-md-12 col-lg-6 mb-5 mb-lg-0'>
                <div className='me-5 me-md-0 mt-3'>
                    <div className='d-flex gap-4 align-items-center'>
                        <div className='d-flex gap-2'>
                            <p className="common__dot"></p>
                            <p className={Class.buysell__dot}></p>
                        </div>
                        <h3 className={`${Class.name__color} service__name`}>Buy, Sell & Rent out properties</h3>

                    </div>
                    <h1 className="service__title">Buy, Sell & Rent out properties</h1>
                    <p className="service__text">Easy for them, automatic for you. Watch your booking conversions soar by offering customers flexible options pay with deposits or ecommerce plans, individually or in groups, in their currency or yours, and more.</p>
                    <button className={`${Class.service__btn} btn__text`}>
                        More Information
                    </button>
                </div>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-6 mb-5 mb-lg-0'>
                <div className=''>
                    <img className='w-100' src={image} alt="" />
                </div>
            </div>
           
        </div>
    );
};

export default BuySell;