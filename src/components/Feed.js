import React, { useEffect, useState } from 'react'
import apiClient from './Spotify';
import axios from 'axios';
import './Feed.css'
import { TbArrowAutofitDown } from 'react-icons/tb';
import { Navigate, useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiFillPlayCircle } from 'react-icons/ai';
export  function Feed() {
  const [category,setCategory]=useState(null);
  const [featured,setfeatured]=useState(null);
  const [tracks,setTracks]=useState(null);
  const [following,setFollowing]=useState(null);
 
const index=6;
useEffect(()=>{
  apiClient.get("browse/categories").then( function(res){
   setCategory(res.data.categories?.items);
   

  });
   
  apiClient.get("/browse/featured-playlists?country=IN").then( function(res){
    setfeatured(res.data.playlists.items);
  });
   
 

   
  


},[]);

const navigate=useNavigate();
const track=(id)=>{

  navigate("/player",{state:{id:id}})

}
  return (
    <div className='feed-body'>
      <div>
      <h1 className='heading'>Categories</h1>
<div className='feed-main'  >
      {category?.slice(0,6).map((category)=>(
        (index<7)&&
        <div className='feed-card' >
        <img src={category?.icons[0]?.url} alt="image" className='feed-card-image' onClick={()=>track(category.id)}/>
        
        <h1 className='feed-card-title'>{category.name}</h1>
        </div>
      ))}

</div>
</div>
      <div>
      <h1 className='heading'>Featured Playlist</h1>
<div className='featured-main'  >
      {featured?.slice(0,10).map((featured)=>(
        <div>
          
         <div className="button-card" onClick={()=>track(featured.id)}>
         <IconContext.Provider value={{size:"52px",className:"button-align",color:"white"}}>
         
         <AiFillPlayCircle/>
       </IconContext.Provider>
       </div>
      
        
        <div className='featured-card'>
        <img src={featured.images[0]?.url} alt="image" className='featured-image'/>
        
        <h1 className='featured-title'>{featured.name}</h1>
        <p className='featured-total'>{featured.tracks.total} Songs</p>
        </div>
        </div>
      ))}

</div>
      </div>
      <div className="">
      <h1 className='heading'>Morning Pick's</h1>
<div className='featured-main' >
      {featured?.slice(8,16).map((featured)=>(
         <div >
          <div className="button-card" onClick={()=>track(featured.id)}>
         <IconContext.Provider value={{size:"52px",className:"button-align",color:"white"}}>
         
         <AiFillPlayCircle/>
       </IconContext.Provider>
       </div>
       
        <div className='featured-card'>
         
        <img src={featured?.images[0]?.url} alt="image" className='featured-image'/>
        
        <div>

        <h1 className='featured-title'>{featured.name}</h1>
        <p className='featured-total'>{featured.tracks.total} Songs</p>
        </div>
        </div>
             
              </div>
      ))}

</div>
      </div>
    </div>
  )
}
