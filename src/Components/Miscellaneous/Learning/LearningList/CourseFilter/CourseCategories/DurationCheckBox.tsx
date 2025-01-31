import { Duration } from '@/Constant'
import { DurationCheckBoxData } from '@/Data/Learning'
import React from 'react'
import { Input, Label } from 'reactstrap'

const DurationCheckBox = () => {
  return (
    <div className='checkbox-animated mt-0'>
      <div className='learning-header'>
        <span className='f-w-500'>{Duration}</span>
      </div>
      {DurationCheckBoxData.map((item, index) => (
        <Label className='d-block mb-2' htmlFor={`duration-${index}`} key={index}>
            <Input className='checkbox_animated' id={`duration-${index}`} type='checkbox'/> {item}
        </Label>
      ))}
    </div>
  )
}

export default DurationCheckBox
