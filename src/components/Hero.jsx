import React from 'react'
import image1 from '../assets/img-hero.jpg' 
const Hero = () => {
  return (
   <>
   <div id='hero-txt' className='text-center font-bold text-xl '>Our Products</div>
   <div id='img-cont'>
   <img className='image' src={image1} alt="shoes" />
   </div>
   </>
  )
}

export default Hero