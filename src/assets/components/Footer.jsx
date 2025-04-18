import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container-fluid footer">
                <footer className="py-5 container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className='footer-logo mb-3'>
                                <img src="./Images/logo-white.svg" alt="NUCOIN" />
                            </div>
                            <div className='description'>
                                By submitting this form, you agree to receive marketing and other
                                communications from Circle about the Circle Products and other
                                company updates. You can unsubscribe from these
                                communications at any time. For more information on our privacy
                                practices, please review our <a href='#'>Privacy Policy.</a>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <h5>Content:</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About Us</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Our Services</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Services Benefits</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Road Map</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Testimonials</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Term and Condition</a></li>
                            </ul>
                        </div>

                        <div className="col-md-2">
                            <h5>Countries:</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pakistan</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Australia</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">India</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Dubai</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Singapore</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Baghdad</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <form>
                                <h5 className='text-uppercase'>Subscribe to the circle newsletter</h5>
                                <p>Monthly digest of whats new and exciting from us.</p>
                                <div className="input-group mb-3">
                                    <label for="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Enter your email address" aria-describedby="basic-addon" />
                                    <div className='input-group-append'>
                                        <button className="btn secondary-button input-group-text" type="button" id='basic-addon'>Subscribe</button>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <h6 className='text-uppercase'>Follow Circle on Social</h6>
                                    <ul className="list-unstyled d-flex">
                                        <li className="ms-3"><a className="social-link" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                                        <li className="ms-3"><a className="social-link" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                                        <li className="ms-3"><a className="social-link" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="text-center py-1 mt-5">
                        <p>Copyright © 2023 NUGENRSIG . All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
