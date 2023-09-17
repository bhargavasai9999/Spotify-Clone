import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Sign.css'
export default function Sign() {
  const navigate=useNavigate();
  useEffect(()=>{
    localStorage.clear();
    alert("signout Successful");
  },[])
  return (
    <div style={{textAlign:"center"}} className='sign-body'>
    <h1 className='arrange'> Signed out Successfully</h1>
    <h1 className='arrange'> Refresh to Login</h1>
    </div>
  )
}
