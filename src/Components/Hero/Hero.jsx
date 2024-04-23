import React from 'react'
import './Hero.css'
import car from '../Assets/car.png'

const Hero = () => {
   return (
      <div className='herodiv'>
         <img src={car} alt="" className='carimg'/>
         <div className="carcontentdiv">
            <div className="carcontent">
            <p className="cartitle">Empower Your Wardrobe</p>
            <p className="cardesc">Unleash Your Inner Strength with Fashion That Makes a Statement</p>
            <button className='carbtn'>Shop Now</button>
            </div>           
         </div>
      </div>
   )
}

export default Hero
