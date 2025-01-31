import RatioImage from '@/CommonComponent/RatioImage'
import { Custom, ImagePath } from '@/Constant'
import React from 'react'
import { Col, Input, Label } from 'reactstrap'

const CustomImagesWithRadio = () => {
  return (
   <Col xxl='3' sm='6'>
    <div className='card-wrapper border rounded-3 checkbox-checked'>
        <h6 className='sub-title'>{Custom}</h6>
        <div className='img-checkbox'>
            <Input className='main-img-cover' id='img-radio-1' type='radio' name='radio6'/>
            <Label htmlFor='img-radio-1' className='mb-0' check>
            <RatioImage src={`${ImagePath}/switch/5.jpg`} alt="coffee-beans" />
            </Label>
        </div>
    </div>
   </Col>
  )
}

export default CustomImagesWithRadio
