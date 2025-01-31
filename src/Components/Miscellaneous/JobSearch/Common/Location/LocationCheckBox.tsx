import { LocationCheckBoxData } from '@/Data/JobSearch'
import React from 'react'

const LocationCheckBox = () => {
  return (
    <div className='location-checkbox'>
      {LocationCheckBoxData.map(({id, text, number,name}, index) => (
        <label key={index} className='d-block' htmlFor={`chk-ani${id}`}>
            <input type='checkbox' className='checkbox_animated' id={`chk-ani${id}`}/>
            {name} <span className='d-block'>{text} {number}</span>
        </label>
      ))}
    </div>
  )
}

export default LocationCheckBox
