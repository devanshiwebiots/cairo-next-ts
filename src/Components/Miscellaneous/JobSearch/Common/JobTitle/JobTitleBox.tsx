import { JobTitleBoxData } from '@/Data/JobSearch'
import React from 'react'
import { CardBody } from 'reactstrap'

const JobTitleBox = () => {
  return (
    <CardBody className=' animate-chk'>
      {JobTitleBoxData.map(({id, text, number}, index) => (
        <label key={index} htmlFor={`chk-ani${id}`} className='d-block'>
            <input type='checkbox' id={`chk-ani${id}`} className='checkbox_animated'/>
            {text}{number}
        </label>
      ))}
    </CardBody>
  )
}

export default JobTitleBox
