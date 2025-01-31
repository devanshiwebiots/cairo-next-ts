import { FilterCheckBoxData } from '@/Data/JobSearch'
import React from 'react'
import { Input, Label } from 'reactstrap'

const FilterCheckBox = () => {
  return (
    <div className='checkbox-animated'>
    {FilterCheckBoxData.map((item, index ) => (
        <label className='d-block' htmlFor={`chk-ani${item.id}`} key={index}>
            <Input type='checkbox' className='checkbox_animated' id={`chk-ani${item.id}`}/>
            {item.text}
        </label>
    ))}
    </div>
  )
}

export default FilterCheckBox
