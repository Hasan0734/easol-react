import React, { useState } from 'react';
import image from '../../assets/Image.png';
import Modals from '../Modal/Modals';
import Class from './Dopechat.module.css';
const Dopechat = () => {
    const [isOpen, setIsOpen] = useState()
    return (

        <section className={Class.video__section}>
            {isOpen && <Modals isOpen={isOpen} setIsOpen={setIsOpen}/>}
            <div className='container'>
                <div className='text-center'>
                    <h1 className={Class.dopechat__title}>Discover DopeChat</h1>
                </div>
                <div className={Class.video__area}>
                    <div className=''>
                        <img className={`${Class.video__image} img-fluid w-100`} src={image} alt="" />
                    </div>
                    <button onClick={() => setIsOpen(true)} className={Class.play__btn}>
                        <i className="fa-solid fa-play"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Dopechat;