import React from 'react'

const Versions = () => {
    return (
        <>
            <div className="container versions-section my-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center mb-5">
                            <h1 className="gradient-text">
                                Dive into the future of blockchain
                            </h1>
                            <div className="descrip">
                                Lorem ipsum dolor sit amet consectetur.
                            </div>
                        </div>
                        <div className="row v2-section align-items-center">
                            <div className="col-md-6 px-3">
                                <span className="tab text-uppercase">
                                    version 2.0
                                </span>
                                <h2>
                                    NUC Sites, Proxy, WWW
                                </h2>
                                <div className="description">
                                    Try the decentralized, secure, reliable Internet of the future with NUC services.
                                </div>
                                <button className="white-btn mt-4">
                                    Read more
                                </button>
                            </div>
                            <div className="col-md-6">
                                <div className="image">
                                    <img src="./Images/v2.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row v1-section align-items-center mt-4">
                            <div className="col-md-6 px-3">
                            <span className="tab text-uppercase">
                                    version 1.0
                                </span>
                                <h2>
                                    NUC Storage
                                </h2>
                                <div className="description">
                                    Keep your data safe and secure with the decentralized storage of the future.                                </div>
                                <button className="white-btn mt-4">
                                    Read more
                                </button>
                            </div>
                            <div className="col-md-6">
                            <div className="image">
                                    <img src="./Images/v1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Versions
