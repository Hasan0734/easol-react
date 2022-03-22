import React from 'react';
import Class from './Footer.module.css'
import img1 from '../../assets/images/Group-17473.png'
import img2 from '../../assets/images/Group-5367.png'
import img3 from '../../assets/images/Group-5368.png'
import { footerData } from './footerData';

const Footer = () => {
    console.log(footerData)
    return (
        <section className={`${Class.FooterSection} py-3`}>
            <div className="container">
                <div className="row d-flex justify-content-between py-5">
                    <div className={`${Class.TopFooter} col-sm-12 col-md-6 col-lg-4`}>
                        <div className={Class.footerlogo}>
                            <a href="#"><img src={img1} alt="" /></a>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, eum.</p>
                        </div>
                        <div className={Class.FooterAppImage}>
                            <h3>Download App</h3>
                            <a href="#"><img src={img2} alt="" /></a>
                            <a href="#"><img src={img3} alt="" /></a>
                        </div>
                    </div>
                    {
                        footerData.map((item, i) => <div key={i} className={`${Class.TopFooter} col-sm-12 col-md-6 col-lg-2`}>
                            <h1 className='text-uppercase'>{item.title}</h1>
                            <ul>
                            {item.items.map((linkItem, i) => <li key={i}><a href="#">{linkItem.titleName}</a></li>)     }                          
                            </ul>
                        </div>)
                    }
          
                </div>
                <div className={Class.FooterBottom}>
                    <div className="row d-flex justify-content-around pt-4">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <p>Copyright © 2021. EASOL all right reserved</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className={Class.FooterSocialicon}>
                                <a href="#"><i className="fab fa-facebook-f" /></a>
                                <a href="#"><i className="fab fa-twitter" /></a>
                                <a href="#"><i className="fab fa-linkedin-in" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;