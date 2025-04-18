import React, { useEffect, useState } from 'react'

const HeroSection = () => {


  const logos = [
    './Images/brand-logos/aws.svg',
    './Images/brand-logos/azure.svg',
    './Images/brand-logos/google.svg',
    './Images/brand-logos/meta.svg',
    './Images/brand-logos/paypal.svg',
    './Images/brand-logos/polkadot.svg',
    './Images/brand-logos/stripe.svg',
    './Images/brand-logos/substrate.svg'
  ];

  const [clones, setClones] = useState([logos]);
  useEffect(()=>{
      setClones([...clones, logos]); // Add another clone of the logos array
  }, [])


  return (
    <>
      <div className="container hero-section">
        <div className="row main-content">
          <div className="col-md-12 text-center">
            <h1>
              AI-powered blockchain
            </h1>
            <h2>
              The future of trust and transparency.
            </h2>
            <div className="paragraph px-5 my-5">
              A decentralized and open internet, created by the community using a technology designed by Telegram.
            </div>
            <div className="d-flex justify-content-center text-center gap-3">
              <button className='btn primary-button text-capitalize'>create wallet</button>
              <button className='btn outline-button text-capitalize'>my wallet</button>
            </div>
          </div>
        </div>
        <div className="row my-5 slider-container">
          <div className="col-md-12">
            <h3 className="gradient-text text-center text-uppercase">
              POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
            </h3>
          </div>
          <div className="logos">
            {clones.map((clone, index) => (
              <div className="logos-slider" key={index}>
                {clone.map((logo, logoIndex) => (
                  <img key={logoIndex} src={logo} alt={`Logo ${logoIndex + 1}`} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
