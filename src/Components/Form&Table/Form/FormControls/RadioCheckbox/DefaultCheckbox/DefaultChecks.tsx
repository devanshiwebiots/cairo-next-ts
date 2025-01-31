import { CheckedCheckbox, DefaultCheck, DefaultCheckboxs } from '@/Constant'
import React from 'react'
import { Col, Input, Label } from 'reactstrap'

const DefaultChecks = () => {
  return (
    <Col sm='6' xl='4'>
        <div className='card-wrapper border rounded-3 checkbox-checked'>
            <h6 className='sub-title'>{DefaultCheck}</h6>
            <div className='form-check'>
                <Input id='flexCheckDefault' type='checkbox'/>
                <Label htmlFor='flexCheckDefault' check>{DefaultCheckboxs}</Label>
            </div>
            <div className="form-check">
          <Input id="flexCheckChecked" type="checkbox" defaultChecked />
          <Label htmlFor="flexCheckChecked" check>{CheckedCheckbox}</Label>
        </div>
        </div>
    </Col>
  )
}

export default DefaultChecks
