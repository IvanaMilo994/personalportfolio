import React from 'react'
//images
import logo00 from '../../assets/Images/header/logo00.png';
import logo1 from '../../assets/Images/header/logo1.png';
import logo2 from '../../assets/Images/header/logo2.png';
import logo3 from '../../assets/Images/header/logo3.png';
import logo4 from '../../assets/Images/header/logo4.png';
import logo5 from '../../assets/Images/header/logo5.png';
import logo6 from '../../assets/Images/header/logo6.png';
import logo7 from '../../assets/Images/header/logo7.png';
import logo8 from '../../assets/Images/header/logo8.png';
import logo9 from '../../assets/Images/header/logo9.png';


function WorkSection() {
    const allImages = [logo00, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];


  return (
    <div className='worksection'>
        <div className="container"> 
        Working with 
        {allImages.map((item,i) => {
            return <div key={i} className="icon">
            <img src={item} alt={'Logo $ {i}'}/> 
            </div>
             })} 
        </div>

    </div>
  )
}

export default WorkSection