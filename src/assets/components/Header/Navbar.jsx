import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar container navbar-expand-lg bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="./Images/logo.svg" alt="NUCOIN"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#'>Roadmap</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#'>Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#'>Contact</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link" href='#'>Terms</a>
                            </li>
                        </ul>
                        <form>
                            <button className="btn primary-button" type="submit">
                                <span>LOGIN</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
