import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../lottie-animations/about-animation.json'
import { useInView } from 'react-intersection-observer';
const About = () => {
    const lottieRef = useRef();

    const DivRef = useRef();
    const { ref, inView } = useInView({
        triggerOnce: false,     // Set true if you want it to play only once
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) {
            lottieRef.current?.play();
        } else {
            lottieRef.current?.stop(); 
        }
    }, [inView]);
    return (
        <>
            <div className="about-section container my-5">
                <div className="row py-5 align-items-center">
                    <div className="col-md-6">
                        <div>
                            <div ref={ref} className="lottie-animation">
                                <Lottie lottieRef={lottieRef} animationData={animationData} loop={false} autoplay={false} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={`about ${inView ? 'visible' : ''}`} ref={DivRef}>
                            <span className="primary-tab">
                                BUSINESS SOLUTIONS
                            </span>
                            <h2 className="gradient-text mb-4">
                                About NUCOIN
                            </h2>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Massa donec eleifend nisl facilisis. Tempor est ante id malesuada ultricies commodo pharetra. Maecenas enim sed euismod lorem.
                                </p>
                                <button className="primary-button text-uppercase">
                                    <span>
                                        read more
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
