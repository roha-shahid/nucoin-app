import React, { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [navOpen, setNavOpen] = useState(false);


    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    const toggleTheme = () => setDarkMode(prev => !prev);

    // In useEffect or after DOM loads
    useEffect(() => {
        const toggleButton = document.querySelector('.navbar-toggler');
        const collapseEl = document.getElementById('navbarSupportedContent');

        const toggleBodyClass = () => {
            document.body.classList.toggle('nav-open', collapseEl.classList.contains('show'));
        };

        collapseEl.addEventListener('shown.bs.collapse', toggleBodyClass);
        collapseEl.addEventListener('hidden.bs.collapse', toggleBodyClass);

        return () => {
            collapseEl.removeEventListener('shown.bs.collapse', toggleBodyClass);
            collapseEl.removeEventListener('hidden.bs.collapse', toggleBodyClass);
        };
    }, []);
    const toggleBodyClass = () => {
        const isOpen = collapseEl.classList.contains('show');
        setNavOpen(isOpen);
        document.body.classList.toggle('nav-open', isOpen);
    };


    return (
        <>
            <nav className="navbar container navbar-expand-lg bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={darkMode ? "./Images/white-logo.png" : "./Images/logo.svg"} alt="NUCOIN" />
                    </a>
                    <div className='d-flex align-items-center'>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            {navOpen ? (
                                <span className="close-icon">✕</span>
                            ) : (
                                <span className="navbar-toggler-icon"></span>
                            )}
                        </button>

                        <div className="collapse navbar-collapse mobile-fullscreen-navbar" id="navbarSupportedContent">
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
                        </div>
                        <form className='d-flex align-items-center'>
                            <button className="btn primary-button" type="submit">
                                <span>LOGIN</span>
                            </button>
                            <div className="form-check form-switch theme-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="themeToggle"
                                    onChange={toggleTheme}
                                    checked={darkMode}
                                />
                                <label className="form-check-label" htmlFor="themeToggle">
                                    {darkMode ? <FaSun /> : <FaMoon />}
                                </label>
                            </div>
                        </form>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar
