import React from 'react'
import { useInView } from 'react-intersection-observer'
const Rank = () => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

    return (
        <>

            <div className="container my-5">
                <div className="row py-5 rank-section align-items-center">
                    <div className="col-md-6 pe-5">
                        <div className="about-section">
                            <h2 className={`text gradient-text mb-4 text-blocks ${inView ? 'in-view' : 'out-of-view'}`} ref={ref}>
                                <span className='text'>
                                    Cryptocurrency
                                </span> is the heart of TON
                            </h2>
                            <div>
                                <p>
                                    Toncoin is TON's native cryptocurrency. It is used for network operations, transactions, games or collectibles built on TON.
                                </p>
                                <button className="primary-button text-uppercase">
                                    <span>
                                        get nucoin
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="inner-section px-5 py-4">
                            <div className='row border-bottom pb-3'>
                                <div className='col-md-6 d-flex gap-3 align-items-center'>
                                    <img src="./Images/nu-coin.png" alt="" />
                                    <div className='d-flex flex-column'>
                                        <span>
                                            Nucoin (NUC)
                                        </span>
                                        <div className='value'>
                                            $1.40
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 d-flex flex-column graph-section text-center'>
                                    <div className="image my-4">
                                        <img src="./Images/graph-vector.png" alt="" />
                                    </div>
                                    <span className='graph-text'>
                                        +0.41% last 24h
                                    </span>
                                </div>
                            </div>
                            <div className="row border-bottom py-4 mb-5">
                                <div className="col-md-4 border-end">
                                    <div className='d-flex flex-column text-center'>
                                        <span className='d-flex align-items-center gap-2 text-center justify-content-center'>
                                            Rank
                                            <img src="./Images/rank-vector.png" alt="" />
                                        </span>
                                        <div className='value rank-value'>
                                            #14
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 border-end">
                                    <div className='d-flex flex-column text-center'>
                                        <span>
                                            Market Cap
                                        </span>
                                        <div className='value rank-value'>
                                            $4.82B
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className='d-flex flex-column text-center'>
                                        <span>
                                            Volume
                                        </span>
                                        <div className='value rank-value'>
                                            $31.63M
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center powered-text">
                                    Powered by  <span> Nugenesis</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Rank
