
import React,  { useEffect, useState }from 'react'
const OverlayComponent = ({texth1}) =>{
    const[isOverlayVisible,setOverlayVisible]=useState(true);
    useEffect(()=>{
      const click = () => {
        setOverlayVisible(false);
      };
      window.addEventListener('click',click);
      return() => {
      window.removeEventListener('click', click);
    }
    },[]);
    
    return(
      <>
      {isOverlayVisible && (
        <>
      
          <div className="overlay">
            <h1>{texth1}</h1>
          </div>  
        
        </>
      )}
    </>
    );
}

export default OverlayComponent;