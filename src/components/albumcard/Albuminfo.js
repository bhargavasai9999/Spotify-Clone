import React from 'react'
import './Albuminfo.css'
export  function Albuminfo(info) {
  const a=info.info?.album
  return (
    <div>
      <h5 className='info-title'>{a?.name}</h5>
      <p className='info-p'><span>Released On: </span>{a?.release_date}</p>

    </div>
  )
}
