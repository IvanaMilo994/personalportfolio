import React from 'react'

//images/icons
import comm from '../../assets/Images/navbar/comm.png';
import linkedin from '../../assets/Images/navbar/linkedin.png';
import github from '../../assets/Images/navbar/github.png';


function Navbar() {

  const navItems = ['Home', 'Case Studies', 'Testimonials', 'Recent Work', 'Get in touch'];


  return <div className='navbar'>
    <div className="navbar_wrapper">
      <div className="navbar_wrapper_items">
        <ul>
          {navItems.map((el, index) => {
            return <li key={index}> {el} </li>
          })}
        </ul>

      </div>

      <div className="navbar_wrapper_icons">
          <img src={comm} alt='comm' />
          <img src={linkedin} alt='linkedin' />
          <img src={github} alt='github' />

      </div>
    </div>
  </div>
  
}

export default Navbar