import React from 'react'
import './Login.css'
import{loginEndpoint} from '../Spotify';
import logo from './login.jpg';
import 'bootstrap/dist/css/bootstrap.css';
export default function Login() {
  return (

    <div className="main-div">
            <img src={logo} alt="Login-Image" className='main-image'/>
            
<center>
  
      <a href={loginEndpoint}>
        <button className='main-button'>Login</button>
         </a>
         <h1 className='main-image login-heading'>Login with Your Spotify Account</h1>
         </center>
    </div>
  )
}
