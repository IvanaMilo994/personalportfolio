import React from 'react';
import CaseCard from '../CaseCard/CaseCard.jsx';

//images
import Image1 from '../../assets/Images/studies/image1.jpg';
import Image2 from '../../assets/Images/studies/image2.jpg';
import Image3 from '../../assets/Images/studies/image3.jpg';
import Image4 from '../../assets/Images/studies/image4.jpg';
import Image5 from '../../assets/Images/studies/image5.jpg';
import TitleComponent from '../Title/TitleComponent.jsx';


function CaseStudie() {
  return (
    <div className='studie'>
        <div className="container">
            <div className="headerInfo">
              <TitleComponent 
              title='Case Studies- Web Development - HTML,CSS, JavaScript' 
              desc='Course successfully passed on 02.11.2023. • Duration: 4 months; The curriculum includes: Essential research skills • Creating static  websites • Applying animations to elements on a page • Advanced page styling • Responsive web design • Creating dynamic web pages • Working with a database • WordPress • Creating themes in WordPress'
              color='purple'
              image= {Image5}/>
              <div className="Certification">
                   <img src={Image5} alt='Certification' />
              </div>
            </div>
  
            <div className='studieContent'>
                <CaseCard  
                color='#FFA500' 
                direction='no-reverse'
                image={Image1}
                title= 'Digital Clock'/>

                <CaseCard 
                color='#c8a2c8' 
                direction='reverse' 
                image={Image2}
                title='To do board'/>

                <CaseCard  
                color='#ff0000' 
                direction='no-reverse'
                image={Image3}
                title='Multiplication App'/>

                <CaseCard  
                color='#0FDDAF' 
                direction='reverse'
                image={Image4}
                title='Heart trial animation'/>

            </div>
        </div>
    </div>
  )
}

export default CaseStudie