import React from 'react'

export default function Card({title,school,year,percentage}) {
  return (
    <div className='mb-5'>
       <li>
        <span className='font-bold'>{title}<span className='ml-2'>{percentage}</span></span>
        <p className='ml-5'>{school}<span className='ml-2'>{year}</span></p>
       </li>
    </div>
  )
}
