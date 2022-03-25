import React from 'react';
import Class from './HowWorks.module.css';
const HowWorks = () => {
    return (
        <section className={Class.works__section}>
            <div className='container'>
                <div>
                    <h1 className={Class.section__title}>How it works?</h1>
                </div>
                <div className='row'>
                    <div className='col-12 col-lg-4  mb-5 mb-md-0'>
                        <div className="position-relative pb-12 py-lg-0">
                            <div className='text-center'>
                                <span className={Class.icon__area1}>
                                    <i className=" fa-solid fa-cloud-arrow-down"></i>
                                </span>
                                <span className={`${Class.line__system}`}>
                                    <i className="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                            <h2 className={Class.title}>Download the app</h2>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 mb-5 mb-md-0'>
                        <div className='position-relative pb-12 py-lg-0'>
                            <div className='text-center'>
                                <span className={Class.icon__area2}>
                                <i className="fa-solid fa-box-open"></i>
                                </span>
                                <span className={`${Class.line__system}`}>
                                    <i className="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                            <h2 className={Class.title}>Add new offering</h2>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 mb-5 mb-md-0'>
                        <div className='pb-12 py-lg-0'>
                            <div className='text-center'>
                                <span className={Class.icon__area3}>
                                    <i className="fa-solid fa-bullhorn"></i>

                                </span>
                            </div>
                            <h2 className={Class.title}>promote</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWorks;