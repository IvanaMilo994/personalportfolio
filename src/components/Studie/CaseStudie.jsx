import React from 'react';
import CaseCard from '../CaseCard/CaseCard.jsx';

//images
import Image1 from '../../assets/Images/studies/image1.jpg';
import Image2 from '../../assets/Images/studies/image2.jpg';
import Image3 from '../../assets/Images/studies/image3.jpg';

function CaseStudie() {
  return (
    <div className='studie'>
        <div className="container">
           
            <div className="headerInfo">
                <h2>
                     Case studie- Web Development - CSS, HTML, JavaScript
 Course successfully passed on 02.11.2023. • Duration: 4 months
                </h2>
                <p>
                The curriculum includes: Essential research skills • Creating static
 websites • Applying animations to elements on a page • Advanced
 page styling • Responsive web design • Creating dynamic web pages •
 Working with a database • WordPress • Creating themes in WordPress
                </p>

            </div>

            
            <div className='studieContent'>
                <CaseCard  color='#FFA500' direction='no-reverse'image={Image1}/>
                <CaseCard  color='#0000FF' direction='reverse' image={Image2}/>
                <CaseCard  color='#0FDDAF' direction='no-reverse'image={Image3}/>

            </div>
        </div>
    </div>
  )
}

export default CaseStudie