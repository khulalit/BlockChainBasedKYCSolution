import React from 'react'
import './Toggle.css'
export default function List () {
  return (
    <div className=' mx-2 my-4 flex justify-around  py-3 text-extrabold rounded-32 rounded border-2 border-primary text-primary'>
        <div className='drop-shadow-lg text-bold'>
            payinsticnt
        </div>
        <div className='px-6 rounded rounded-12 py-1 text-white bg-green-600'>
            active
        </div>
        <div className='drop-shadow-lg ' >
            address
        </div>
        <div>
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider round"></span>
                </label>
        </div>
        <div>
            action
        </div>
    </div>
  )
}
