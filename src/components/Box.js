import React, { useState } from 'react';    
import ReactCardFlip from 'react-card-flip'; 
import './Box.css'

export const Box=(props)=> {
    //const color = colors[Math.floor(Math.random() * 9)];
    const [isFlipped, setisFlipped] = useState(false);
  
   const handleClick=()=>{
      setisFlipped(!isFlipped)
    }
   
    return (
        <div onClick={handleClick} className="react-card-flip-container">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" infinite="true">
                <div>
                    {props.tema}
                </div>
                <div>
                    {props.adatok[props.id]}
                </div>
            </ReactCardFlip>
        </div>
    );
  }
