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
      <p className='p'>{track.track?.duration_ms}</p>
      </div>
      </div>
)}

    </div>
  )
}
