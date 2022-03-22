import React from 'react';
import Class from './Dopechat.module.css'
import image from '../../assets/Image.png'
const Dopechat = () => {
    return (
        <section className={Class.video__section}>
            <div className='container'>
                <div className='text-center'>
                    <h1 className={Class.dopechat__title}>Discover DopeChat</h1>
                </div>
                <div className={Class.video__area}>
                    <div className=''>
                        <img className={`${Class.video__image} img-fluid w-100`} src={image} alt="" />


                    </div>
                    <button className={Class.play__btn}>
                        <i class="fa-solid fa-play"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Dopechat;