import { Status } from '@/Constant'
import { StatusCheckBoxData } from '@/Data/Learning'
import React from 'react'
import { Input, Label } from 'reactstrap'

const StatusCheckBox = () => {
  return (
    <div className='checkbox-animated mt-0'>
      <div className='learning-header'>
        <span className='f-w-500'>{Status}</span>
      </div>
      {StatusCheckBoxData.map((item ,index) => (
        <Label className='d-block mb-2' htmlFor={`status-${index}`} key={index}>
            <Input type='checkbox' className='checkbox_animated' id={`status-${index}`}/> {item}
        </Label>
      ))}
    </div>
  )
}

export default StatusCheckBox
