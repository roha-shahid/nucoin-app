import React from 'react'
import Navbar from './Header/Navbar'
import HeroSection from './Header/HeroSection'
import About from './Header/About'

const Header = () => {
  return (
    <>
      <div className="header-section">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
        <Navbar />
        <HeroSection />
        <About />
      </div>
    </>
  )
}

export default Header
