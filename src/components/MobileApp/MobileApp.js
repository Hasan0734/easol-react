import React from 'react';
import Class from './MobileApp.module.css'
import  Apple from '../../assets/images/image-152.png'
import  Google from '../../assets/images/Google-play-button.png'
import  Phone from '../../assets/images/Group-39745@2x.png'
const MobileApp = () => {
    return (
        <section className={Class.DownloadMobileAppliction}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className={Class.LeftSideMobileApp}>
                            <h1>Download our Mobile Application</h1>
                            <p>No WiFi? No Problem! Download classes and take them without an internet connection.</p>
                            <div className={Class.AppImagesWrapper}>
                                <a href="#"><img src={Apple} alt=""/></a>
                                <a href="#"><img src={Google} alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className={Class.RightSideMobileApp}>
                            <a href=""><img src={Phone} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileApp;