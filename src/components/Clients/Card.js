import React from 'react'
import Class from './Clients.module.css'
import Image from '../../assets/client/image1.png'
const Card = () => {
    return (
        <div className="">
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
    );
};

export default Card;