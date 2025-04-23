import React from 'react'
import { useInView } from 'react-intersection-observer';

const Roadmap = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,     
        threshold: 0.1,
    });

    const Data = [
        {
            id: 1,
            date: "Nov 23rd 2020",
            description: "Commence stage 2 blockchain development(Completed)"
        },
        {
            id: 2,
            date: "Nov 23rd 2020",
            description: "Commence justsocial.tech crytpo/social media platform (Completed)"
        },
        {
            id: 3,
            date: "Nov 23rd 2020",
            description: "248M coin minted Just social live, Tech white pages live, (Completed"
        },
        {
            id: 4,
            date: "Nov 23rd 2020",
            description: "NUCOIN miner service agreement for sale via justsocial.tech (Completed"
        },
        {
            id: 5,
            date: "Nov 23rd 2020",
            description: "Staking and Mining protocols launched. and staking contracts issued through (Completed)"
        },
        {
            id: 6,
            date: "Nov 23rd 2020",
            description: "Staking and Mining protocols launched. and staking contracts issued through (Completed)"
        },

    ]
    return (
        <>
            <div className="container-fluid">
                <div className="container roadmap-section">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className='gradient-text'>
                                NUCOIN Roadmap
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Et sit quam cursus in tellus.
                            </p>
                        </div>
                        <div className="col-md-12 roadmap">
                            <ul className={`custom-list`} ref={ref}>
                                <li className={`${inView ? 'visible' : ''}`}>
                                    <div className="dates">
                                        Nov 23rd 2020
                                    </div>
                                    <span>
                                        Commence stage 2 blockchain development(Completed)
                                    </span>
                                </li>
                                <li className={`${inView ? 'visible' : ''}`}>
                                    <div className="dates">
                                        Nov 23rd 2020
                                    </div>
                                    <span>
                                        Commence justsocial.tech crytpo/social media platform (Completed)
                                    </span>
                                </li>
                                <li className={`${inView ? 'visible' : ''}`}>
                                    <div className="dates">
                                        Nov 23rd 2020
                                    </div>
                                    <span>
                                        248M coin minted Just social
                                        live, Tech white pages live,
                                        (Completed
                                    </span>
                                </li>
                                <li className={`${inView ? 'visible' : ''}`}>
                                    <div className="dates">
                                        Nov 23rd 2020
                                    </div>
                                    <span>
                                        NUCOIN miner service
                                        agreement for sale via
                                        justsocial.tech (Completed
                                    </span>
                                </li>
                                <li className={`${inView ? 'visible' : ''}`}>
                                    <div className="dates">
                                        Nov 23rd 2020
                                    </div>
                                    <span>
                                        Staking and Mining protocols launched. and staking contracts issued through (Completed)
                                    </span>
                                </li>
                                <li className={`${inView ? 'visible' : ''}`}>
                                    <div className="dates">
                                        Nov 23rd 2020
                                    </div>
                                    <span>
                                        Staking and Mining protocols launched. and staking contracts issued through (Completed)
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roadmap
