import React from 'react';
import image from '../../../assets/group/Group1.png'
import Class from './Payment.module.css'
const Payment = () => {
    return (
        <div className='row service__margin'>
            <div className='col-6'>
                <div className=''>
                    <img className='w-100' src={image} alt="" />
                </div>
            </div>
            <div className='col-6'>
                <div className='ms-5 mt-3'>
                    <div className='d-flex gap-4 align-items-center'>
                        <div className='d-flex gap-2'>
                            <p className="common__dot"></p>
                            <p className={Class.payment__dot}></p>
                        </div>
                        <h3 className={`${Class.name__color} service__name`}>Payments</h3>

                    </div>
                    <h1 className="service__title">Get Paid in Ways Your Customers Will Love</h1>
                    <p className="service__text">Easy for them, automatic for you. Watch your booking conversions soar by offering customers flexible options pay with deposits or payment plans, individually or in groups, in their currency or yours, and more.</p>
                    <button className={`${Class.service__btn} btn__text`}>
                        More Information
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Payment;