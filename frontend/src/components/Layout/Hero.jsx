import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/hero/img1.jpg';
import img2 from '../../assets/hero/img2.jpg';
import img3 from '../../assets/hero/img3.jpg';
import img4 from '../../assets/hero/img4.jpg';
import img5 from '../../assets/hero/img5.jpg';
import img6 from '../../assets/hero/img6.jpg';

function Hero() {
  return (
    
    <Carousel autoPlay infiniteLoop showStatus={true} showThumbs={false} interval={4000}  >
                <div>
                    <img src={img1} />
                    
                </div>
                <div>
                    <img src={img2} />
                    
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
                <div>
                    <img src={img4}  />
                    
                </div>
                <div>
                    <img src={img5}  />
                    
                </div>
                <div>
                    <img src={img6}  />
                    
                </div>
            </Carousel>


  )
}

export default Hero