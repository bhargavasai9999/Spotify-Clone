import React from 'react'
import './Controls.css'
import {AiOutlineStepForward,AiOutlineStepBackward,AiFillPauseCircle,AiFillPlayCircle} from 'react-icons/ai';


export  function Controls({isPlaying,setisPlaying,handleNext,handlePrev}) {
  return (
    <div className='controls-body'>
     <AiOutlineStepBackward size={60} style={{margin:"30px"}} onClick={handlePrev}/>
<div className={isPlaying? 'controls-active': "controls"}>
  {isPlaying?     <AiFillPauseCircle size={60} style={{margin:"30px"}} onClick={()=>setisPlaying(!isPlaying)}/> 
:     <AiFillPlayCircle size={60} style={{margin:"30px"}} onClick={()=>setisPlaying(!isPlaying)}/>
}
     </div>
        <AiOutlineStepForward size={60} style={{margin:"30px"}} onClick={handleNext}/>
    </div>
  )
}
