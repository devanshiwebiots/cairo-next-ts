import { BorderedRadios, KohoTheme } from '@/Constant'
import React from 'react'
import { Col, Input, Label } from 'reactstrap'
import BorderedRadioData from './BorderedRadioData'

const BorderedRadio = () => {
  return (
    <Col xl='4' sm='6'>
        <div className='card-wrapper border rounded-3 h-100 checkbox-checked'>
            <h6 className='sub-title'>{BorderedRadios}</h6>
            <div className='form-check radio radio-secondary'>
            <Input id="radio22" type="radio"  name="radio1" defaultChecked />
            <Label htmlFor="radio22" check>{KohoTheme}</Label>
            </div>
            <BorderedRadioData />
        </div>
    </Col>
  )
}

export default BorderedRadio
