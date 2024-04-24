import React from 'react'

function CaseCard({color, direction, image}) {
  return (
    <div className= {`${direction === 'reverse' ? 'reverseItem' :  ''} studieContent_Card`}
        >
        <div 
            className="leftSide"
            >
            <h2 style={{color:color}}>
                Naslov slike
            </h2>
            <p> Tekst: A public platform building the definitive collection of coding questions & answers
A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world.</p>
        </div>
        <div className="rightSide">
            <img src={image} alt='slika'/>


        </div>
        
        
        
        </div>
        
  )
}

export default CaseCard