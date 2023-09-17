import React, { useEffect, useRef, useState } from 'react'
import './Songplayer.css'
 
import { Controls } from './Controls'
export  function Songplayer({current,curindex,setcurindex,total}) {
const [isPlaying,setisPlaying]=useState(false);
const [trackProgress,settrackProgress]=useState(0);

 var audioSrc=total[curindex]?.track.preview_url;
 const audioRef=useRef(new Audio(total[0]?.track.preview_url));

 audioRef.muted=true;

 const intervalRef=useRef();
 const isReady=useRef(false);
 const {duration} =audioRef.current;
 
//  const currentpercentage=duration ? (trackProgress/duration)*100:0;
//  var isPlaying = audioRef.current.currentTime > 0 && !audioRef.current.paused && !audioRef.current.ended 
//  && audioRef.current.readyState > audioRef.current.HAVE_CURRENT_DATA;
 const startTimer=()=>{
  clearInterval(intervalRef.current);
  intervalRef.current=setInterval(()=>{
    if(audioRef.current.ended){
      handleNext();
    }
    else{

      settrackProgress(audioRef.current.currentTime);

    }
  },[1000])
 }
 useEffect(()=>{
  
  if(isPlaying && audioRef.current){
    audioRef.current=new Audio(audioSrc);
    startTimer();
    if(audioRef.current !==null)  {
      audioRef.current.play();
    }
    
  }
  else{
    clearInterval(intervalRef.current);
    audioRef.current.pause();

  }
 },[isPlaying]);
 useEffect(()=>{
  console.log("2")

  audioRef.current.pause();
  audioRef.current= new Audio(audioSrc);
  
  settrackProgress(audioRef.current.currentTime);
  console.log(audioRef.autoplay)
  if(audioRef.current){
  audioRef.current?.play();
  setisPlaying(true);
  startTimer();
  }
  
  // else{
  //   isReady.current=true;
  // }
 },[curindex])
 useEffect(()=>{
  console.log("3")
  return (()=>{
    audioRef.current?.pause();
  clearInterval(intervalRef.current);
  });
  
 },[])
 const handleNext=()=>{
  if(curindex<total.length-1){
setcurindex(curindex+1);
  }
  else{
    setcurindex(0);
  }
 }
 const handlePrev=()=>{
  if(curindex-1<0){
    setcurindex(total.length-1)

  }
  else{
    setcurindex(curindex-1);
  }
 }

  return (
    <div className='songplayer-body'>
      {current ? <h1 className='song-title'>{current?.name}</h1>:<p className='song-title'>select song from Library or Home</p>}
          
          <p className='song-title' style={{fontSize:"20px"}}>{current?.album?.name}</p>
      <Controls  isPlaying={isPlaying} setisPlaying={setisPlaying} handlePrev={handlePrev}handleNext={handleNext}/>
    </div>
  )
}
