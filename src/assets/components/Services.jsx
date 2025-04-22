import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-react';
import animationData from '../lottie-animations/Artboard.json';
import { useInView } from 'react-intersection-observer';
const Services = () => {

    const lottieRef = useRef();
    const { ref, inView } = useInView({
        triggerOnce: false,     // Set true if you want it to play only once
        threshold: 0.3,          // How much is visible before triggering
    });

    useEffect(() => {
        if (inView) {
            lottieRef.current?.play();
        } else {
            lottieRef.current?.stop(); // or .pause() if you prefer
        }
    }, [inView]);
    return (
        <>
            <div className="container solution-section mt-5 p-5" ref={ref}>
                <div className={`row benefits-section benefits ${inView ? 'visible' : ''}`}>
                    <div className="col-md-6">
                        <span className="tab primary-tab text-uppercase">
                            Benefits
                        </span>
                        <h1 className="gradient-text mb-4">
                            Benefits of using
                            our solution
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Massa donec eleifend nisl facilisis.
                            Tempor est ante id malesuada ultricies commodo pharetra. Maecenas enim sed euismod lorem.
                        </p>
                        <button className='btn primary-button text-uppercase'>
                            <span>
                                Explore NUCOUN
                            </span>
                        </button>
                    </div>
                    <div className="col-md-6">
                        <div class="accordion" id="accordionPanel">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button gap-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        <img src="./Images/bolt.svg" alt="" />
                                        <span>
                                            Settle in minutes
                                        </span>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionPanel">
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur. Aliquam amet gravida ornare ornare. Semper volutpat morbi senectus aenean convallis egestas nibh lectus eget.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed gap-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        <img src="./Images/chain-julius.svg" alt="" />
                                        <span>
                                            Fully programmable
                                        </span>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionPanel">
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur. Aliquam amet gravida ornare ornare. Semper volutpat morbi senectus aenean convallis egestas nibh lectus eget.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed gap-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        <img src="./Images/multichain-bazooka.svg" alt="" />
                                        <span>
                                            Always-on, 24-7
                                        </span>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionPanel">
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur. Aliquam amet gravida ornare ornare. Semper volutpat morbi senectus aenean convallis egestas nibh lectus eget.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed gap-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                        <img src="./Images/calculator-gumdrop.svg" alt="" />
                                        <span>
                                            Near-zero cost
                                        </span>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionPanel">
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet consectetur. Aliquam amet gravida ornare ornare. Semper volutpat morbi senectus aenean convallis egestas nibh lectus eget.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row services-section benefits-section mt-5 align-items-center">
                    <div className={`col-md-8 our-services ${inView ? 'visible' : ''}`}>
                        <span className="tab primary-tab text-uppercase">
                            Our Services
                        </span>
                        <h1 className="gradient-text mb-4">
                            Nucoin service
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Massa donec eleifend nisl facilisis.
                            Tempor est ante id malesuada ultricies commodo pharetra. Maecenas enim sed euismod lorem.
                        </p>
                        <ul>
                            <li>
                                Online chat is working 24/7
                            </li>
                            <li>
                                Great for solving urgent cases
                            </li>
                            <li>
                                Free subscription for the first 14 days
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <div ref={ref} style={{ width: 300, height: "auto", cursor: 'pointer' }}>
                                <Lottie lottieRef={lottieRef} animationData={animationData} loop={false} autoplay={false} />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 ">
                        <div className="col-md-4">
                            <div className="d-flex services gap-3 align-items-center justify-content-between mt-3">
                                <div className='image'>
                                    <img src="../Images/Block1.svg" alt="" />
                                </div>
                                <div className='text'>
                                    Plan your business
                                    <a href="/">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex services gap-3 align-items-center justify-content-between mt-3">
                                <div className='image'>
                                    <img src="../Images/Block2.svg" alt="" />
                                </div>
                                <div className='text'>
                                    Plan your business
                                    <a href="/">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex services gap-3 align-items-center justify-content-between mt-3">
                                <div className='image'>
                                    <img src="../Images/Block3.svg" alt="" />
                                </div>
                                <div className='text'>
                                    Plan your business
                                    <a href="/">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
