import React, { useEffect, useState } from 'react'
import { Albumimage } from './Albumimage'
import { Albuminfo } from './Albuminfo';
import apiClient from '../Spotify';
import { useLocation } from 'react-router-dom';
import './Album.css'
export default function Album(album) {

   
  return (
    <div className='album'>
      <Albumimage image={album?.album?.album}/>
      <Albuminfo info={album?.album} />
    </div>
  )
}
