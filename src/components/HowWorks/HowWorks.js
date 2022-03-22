import React from 'react';
import Class from './HowWorks.module.css'
const HowWorks = () => {
    return (
        <section className={Class.works__section}>
            <div className='container'>
                <div>
                    <h1 className={Class.section__title}>How it works?</h1>
                </div>
                <div className='row'>
                    <div className='col-4 position-relative'>
                        <div className="position-relative">
                            <div className='text-center'>
                                <span className={Class.icon__area1}>
                                    <i class=" fa-solid fa-cloud-arrow-down"></i>
                                </span>
                                <span className={Class.line__system}>
                                    <i class="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                            <h2 className={Class.title}>Download the app</h2>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='position-relative'>
                            <div className='text-center'>
                                <span className={Class.icon__area2}>
                                    <i class="fa-solid fa-cloud-arrow-down"></i>
                                </span>
                                <span className={Class.line__system}>
                                    <i class="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                            <h2 className={Class.title}>Add new offering</h2>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div>
                            <div className='text-center'>
                                <span className={Class.icon__area3}>
                                    <i class="fa-solid fa-bullhorn"></i>

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