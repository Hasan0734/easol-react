import React from 'react';
import Class from './Header.module.css'
const HeaderCard = () => {
    return (
        <div className='row'>
            <div className='col-4 mb-4'>
                <div className={`${Class.card__img1} header__img`}>
                </div>
            </div>
            <div className='col-4 mb-4'>
                <div className={`${Class.card__img2} header__img`}>
                </div>
            </div>
            <div className='col-4 mb-4'>
                <div className={`${Class.card__img3} header__img`}>
                </div>
            </div>
            <div className='col-4 mb-4'>
                <div className={`${Class.card__img4} header__img`}>
                </div>
            </div>
            <div className='col-4 mb-4'>
                <div className={`${Class.card__img5} header__img`}>
                </div>
            </div>
            <div className='col-4 mb-4'>
                <div className={`${Class.card__img6} header__img`}>
                </div>
            </div>
            <div className='col-4'>
                <div className={`${Class.card__img7} header__img`}>
                </div>
            </div>
            <div className='col-4'>
                <div className={`${Class.card__img8} header__img`}>
                </div>
            </div>
            <div className='col-4'>
                <div className={`${Class.card__img9} header__img`}>
                </div>
            </div>
        </div>
    );
};

export default HeaderCard;