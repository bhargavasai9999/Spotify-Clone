import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom';
import './Player.css';
import apiClient from './Spotify'
import  Album from './albumcard/Album';
import { Queue } from './upnext/Queue';
import { Songplayer } from './player/Songplayer';
export  function Player() {
const location=useLocation();
const [tracks,settracks]=useState([]);
const [current,setcurrent]=useState({});
const [curindex,setcurindex]=useState(0);
useEffect(()=>{
  if(location.state){
    apiClient.get("playlists/"+location.state?.id+"/tracks").then(res=>{
      settracks(res.data.items);
      setcurrent(res.data.items[0].track);
      }
      

)}
},[location.state]);
useEffect(()=>{
  setcurrent(tracks[curindex]?.track);
}
,[curindex])

  return (
    <div className='player-body'>
      <div className='player-part1'>
        <div className='player'>
        <Songplayer total={tracks} current={current} curindex={curindex} setcurindex={setcurindex}/>

        </div>

      </div>
      <div className='player-part2'>
    <div className='player-album'>
       <Album album={current} />

    </div>
  <div className='player-tracks'>
    <Queue tracks={tracks} setcurrent={setcurrent} setcurindex={setcurindex} />
  </div>
      </div>
    </div>
  )
}
