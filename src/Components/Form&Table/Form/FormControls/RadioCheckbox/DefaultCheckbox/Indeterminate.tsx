import { IndeterminateCheckbox, Indeterminates } from '@/Constant'
import React from 'react'
import { Col, Input, Label } from 'reactstrap'

const Indeterminate = () => {
  return (
    <Col xl='12' sm='6'>
        <div className='card-wrapper border rounded-3 checkbox-checked'>
            <h6 className='sub-title'>{Indeterminates}</h6>
            <div className='form-check'>
                <Input id='flexCheckIndeterminate' type='checkbox'/>
                <Label check>{IndeterminateCheckbox}</Label>
            </div>
        </div>
    </Col>
  )
}

export default Indeterminate
