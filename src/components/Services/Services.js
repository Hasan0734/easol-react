import React from 'react';
import Booking from './Booking/Booking';
import BuySell from './BuySell/BuySell';
import Demand from './Demand/Demand';
import Ecommerce from './ECommerce/ECommerce';
import Payment from './Payment/Payment';
import Class from './Services.module.css'
const Services = () => {
    return (
        <section className={Class.services__section}>
            <div className='container'>
                <Payment/>
                <Ecommerce/>
                <Demand/>
                <BuySell/>
                <Booking/>
            </div>
        </section>
    );
};

export default Services;