import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Feed} from './Feed';
import {Player} from'./Player';
import {Trending} from './Trending';
import {Library} from './Library';
import Login from './auth/Login';
import { setClientToken } from './Spotify';
import { Sidebar } from './Sidebar';
import './Home.css';
import { Sidebarbutton } from './Sidebarbutton';
import Sign from './auth/Sign';
export function Home() {
  var hours = 1; 
var now = new Date().getTime();
var setupTime = localStorage.getItem('setupTime');
const [token,settoken]=useState("");
useEffect(()=>{
const token= window.localStorage.getItem("token");
const hash=window.location.hash;
window.location.hash="";
if(!token && hash &&setupTime){
  localStorage.setItem('setupTime', now)
  const _token=hash.split('&')[0].split('=')[1];
  window.localStorage.setItem("token",_token);
  settoken(_token);
  setClientToken(_token);
}
// else if{
//   

// }
else if(now-setupTime > hours*60*60*1000) {
  localStorage.clear()
  localStorage.setItem('setupTime', now);

  }
  else{
 settoken(token);
 setClientToken(token);
  }
 
},[])
 



  return (
    (!token)?  <Login/>:

    <Router>
      <div className='main-body'>
        <Sidebar/>
      <Routes>
            < Route path="/spotify" element={<Feed/>}/>
            < Route path="/" element={<Feed/>}/>
            <Route path ="/player" element={<Player/>}/>
            <Route path ="/library" element={<Library/>}/>
            <Route path ="/trending" element={<Trending/>}/>
            <Route path ="/signout" element={<Sign/>}/>
      </Routes>
      </div>



    </Router>
  )
}
