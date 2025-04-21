import React, { useState } from 'react'

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <>
            <div className="container my-5 video-section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text text-center">
                            <h1 className="gradient-text">
                                Get to know us more
                            </h1>
                            <p>
                                Our independent consulting company will help you improve the efficiency of your business in a short time.
                            </p>
                        </div>
                        <div className="video-container mx-5">
                            {!isPlaying ? (
                                <div onClick={() => setIsPlaying(true)} style={{ cursor: 'pointer' }}>
                                    <img src="../Images/video-thumbnail.png" alt="" style={{ width: '100%', display: 'block' }} />
                                    <div
                                    className='play-btn'>
                                        <svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 24 24"
                                            fill="#25262A"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            ) : (
                                <video controls autoPlay style={{ width: '100%' }}>
                                    <source src="/" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Video
