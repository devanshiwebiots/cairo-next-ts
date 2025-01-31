import { IndustryBoxData } from '@/Data/JobSearch'
import React from 'react'
import { CardBody } from 'reactstrap'

const IndustryBox = () => {
  return (
   <CardBody className='animate-chk'>
    {IndustryBoxData.map(({id, text, number}, index) => (
        <label key={index} className='d-block' htmlFor={`chk-ani${id}`}>
            <input type='checkbox' className='checkbox_animated' id={`chk-ani${id}`}/>
            {text}{number}
        </label>
    ))}
   </CardBody>
  )
}

export default IndustryBox
