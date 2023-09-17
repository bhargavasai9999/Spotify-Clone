import React, { useEffect, useState } from 'react'
import axios from 'axios';
import apiClient from './Spotify';
import './Library.css';
import{AiFillPlayCircle} from 'react-icons/ai'
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';

export function Library() {
const [Playlist,setPlaylist]=useState(null)
  useEffect(()=>{
 apiClient.get("me/playlists").then( function(res){
  
  setPlaylist(res.data.items );
  
})

  },[]) 
const navigate=useNavigate()

  const playPlaylist=(id)=>{
      navigate('/spotify/player',{state:{id:id}})
  }
  return (

    <div  className="library-body">
                <h1 className='heading'>Your Playlists</h1>

        <div className='library-inside'>
          {Playlist?.map((Playlist)=>(
            
            <div >
            <div className="button-card" onClick={()=>playPlaylist(Playlist.id)}>
           <IconContext.Provider value={{size:"52px",className:"button-align",color:"white"}}>
           
           <AiFillPlayCircle/>
         </IconContext.Provider>
         </div>
            <div  className='library-card' key={Playlist.id} >
                            <img src={Playlist.images[0].url} alt="Playlist-image" className='playlist-image'/>

              <div className='card-inside' > 
              <div>        
      
                  <p className="playlist-title">{Playlist.name}</p>
               
                <p className="playlist-song">{Playlist.tracks.total} Songs</p>
             
                </div>
              
              </div>

            </div>
            </div>
          ))}
        </div>
        </div>

  )

}

