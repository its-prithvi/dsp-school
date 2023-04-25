import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import image1 from '../../Asset/carousal_1.jpeg'
import image2 from '../../Asset/carousal_2.jpg'
import image3 from '../../Asset/carousal_3.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './css/carousal.css'
function Carousal() {
    return (
        <Carousel autoPlay={true} showThumbs={false} transitionTime={800}  showArrows={false} infiniteLoop={true} showStatus={false} dura swipeable={false} showIndicators={false} emulateTouch={true} animationHandler={'fade'} >
            <div className='carousal_item w-[100%] md:h-auto h-[20vh]'>
                <img src={image1} className='w-[100%]' alt=''/>
            </div>
            <div className='carousal_item w-[100%] md:h-auto h-[20vh] '>
                <img src={image2} className='w-[100%]' alt=''/>
            </div>
            <div className='carousal_item w-[100%] md:h-auto h-[20vh] '>
                <img src={image3} className='w-[100%]' alt=''/>
            </div>
        </Carousel>
    )
}

export default Carousal