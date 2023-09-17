import React, { useEffect } from 'react'
import './Sidebarbutton.css';
import { Link, useLocation } from 'react-router-dom';
import {IconContext} from 'react-icons'
export  function Sidebarbutton(props) {
    const location=useLocation();
    const loc=location.pathname===props.to
    const btnactive= loc? "button-container btnactiv" : "button-container";
 
    useEffect(()=>{
 
    },[])
    

  return (
    <Link to={props.to}>
    <div className={btnactive}>
        <IconContext.Provider value={{size:"24px",className:"btn-icon"}}>
        {props.icon}
        </IconContext.Provider>
        <p className='title'>{props.title}</p>
     
    </div>
    </Link>
  )
}
