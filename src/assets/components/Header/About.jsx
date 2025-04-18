import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../assets/lottie-animations/about-animation.json'
import { useInView } from 'react-intersection-observer';
const About = () => {
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
            <div className="about-section container my-5">
                <div className="row py-5 align-items-center">
                    <div className="col-md-6">
                        <div>
                            <div ref={ref} style={{ width: 400, height: 400, cursor: 'pointer' }}>
                                <Lottie lottieRef={lottieRef} animationData={animationData} loop={false} autoplay={false} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-section">
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
                                    read more
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
