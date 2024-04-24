import React from 'react'
import profileimage from '../../assets/Images/header/profile.jpg';


function Hero() {
  return (
     <div className='hero'>
         <div className="container">
              <div className="hero_left">
                <h2>Ivana Milojkovic</h2>
                <p> Every developer has a
tab open to Stack Overflow</p>
                <button>Let's talk</button>
              



             </div>
         <div className="hero_right">
                   <img src={profileimage} alt= "profile"/>
             </div>
         </div>

    </div>
  )
}

export default Hero