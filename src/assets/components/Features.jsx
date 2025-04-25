import React from 'react'

const Features = () => {
  return (
    <>
      <div className="container-fluid features-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center mb-5">
              <h1 className="gradient-text">
                Powerful Features
              </h1>
              <div className="descrip">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <div className="col-md-6 gradient-bg">
              <img src="./Images/feature-img.png" alt="" />
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="feature d-flex gap-3 align-items-center">
                    <img src="./Images/feature1.png" alt="" />
                    <div className="description">
                      <h5>
                        Personal Wallet
                      </h5>
                      <div className='para'>
                        Lorem ipsum dolor sit amet consectetur.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature d-flex gap-3 align-items-center">
                    <img src="./Images/feature2.png" alt="" />
                    <div className="description">
                      <h5>
                        Smart Search
                      </h5>
                      <div className='para'>
                        Lorem ipsum dolor sit amet consectetur.
                      </div>
                    </div>
                  </div></div>
                <div className="col-md-6">
                  <div className="feature d-flex gap-3 align-items-center">
                    <img src="./Images/feature3.png" alt="" />
                    <div className="description">
                      <h5>
                        Track Rates
                      </h5>
                      <div className='para'>
                        Lorem ipsum dolor sit amet consectetur.
                      </div>
                    </div>
                  </div></div>
                <div className="col-md-6">
                  <div className="feature d-flex gap-3 align-items-center">
                    <img src="./Images/feature4.png" alt="" />
                    <div className="description">
                      <h5>
                        Store
                      </h5>
                      <div className='para'>
                        Lorem ipsum dolor sit amet consectetur.
                      </div>
                    </div>
                  </div></div>
                <div className="col-md-6">
                  <div className="feature d-flex gap-3 align-items-center">
                    <img src="./Images/feature5.png" alt="" />
                    <div className="description">
                      <h5>
                        Push Alerts
                      </h5>
                      <div className='para'>
                        Lorem ipsum dolor sit amet consectetur.
                      </div>
                    </div>
                  </div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
