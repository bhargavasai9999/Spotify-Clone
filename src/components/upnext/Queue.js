import React, { useEffect, useState } from 'react'
import './Queue.css'
export  function Queue({tracks,setcurrent,setcurindex}) {
    
   
  return (
    <div>
      <h4 className='up-head'>Up Next</h4>
      {tracks?.map((track,index)=>
      
      <div>
        
        <div className='align-p' onClick={()=>{
          setcurindex(index)}}>
      <p className='p'>{track.track?.name} </p>
      <p className='p'>{Math.round(((track.track?.duration_ms)/1000)/60)}.{Math.round(((track.track?.duration_ms)/1000)%60)} min</p>
      </div>  
      </div>
)}

    </div>
  )
}
