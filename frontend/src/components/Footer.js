import React from 'react'
import './Card.css'

export default function Footer() {
  return (
    <div
    className='h-40 custom-bg p-5'>
      <div className='text-white text-bold text-center m-5'>
        This is project done by Lalit and Gaurav as part of Minor Project for MSc Computer Science, Department of Computer Science, University of Delhi  
      </div>
      <div className='text-white text-bold text-center'>
        For more details goto <a className="text-red-400 font-mono hover:underline p-1" href='https://www.github.com/khulalit'>Github</a>
      </div>
    </div>
  )
}
