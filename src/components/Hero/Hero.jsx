import React from 'react'
import profileimage from '../../assets/Images/header/profile.jpg';


function Hero() {
  return (
     <div className='hero'>
         <div className="container">
              <div className="hero_left">
                <h2>Ivana Milojkovic</h2>
                <p> After studying, and working in a private company, I devoted myself to
Web development and gaining knowledge in this field, which includes:
React JS starting with HTML, CSS and CSS3, SASS, JavaScript,
jQuery, Bootstrap, responsive web design, as well as the PHP, MySQL,
and WordPress.</p>
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