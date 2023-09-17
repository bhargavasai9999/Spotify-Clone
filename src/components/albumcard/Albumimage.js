import React from 'react'
import './Albumimage.css'
export  function Albumimage(image) {
  return (
    <div>
      <h4 className='head'>Now Playing</h4>
      <img src={image.image?.images[0]?.url} alt="Current-song-Image"  className='album-image'/>
    </div>
  )

}
