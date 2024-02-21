import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import './Video.css'

export default function Video({ ...props }) {
  //const [playing, setPlaying] = useState(false)
  return (
    <div className='player-wrapper'  >
      <ReactPlayer style={{ border: '1px solid #e0e3eb', background: '#131722',boxSizing: 'border-box' }} height={254} width={'100%'} url={'https://www.youtube.com/watch?v=dV00JxVDBdk'} controls />
    </div>
  )
}
