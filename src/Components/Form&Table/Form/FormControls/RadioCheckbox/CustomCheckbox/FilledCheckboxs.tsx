import { DangerCheckboxSolid, FilledCheckbox, InfoChekcboxSolid, WarningCheckboxSolidWarning } from '@/Constant'
import { BorderCheckboxData } from '@/Data/Form& Table/Form'
import React from 'react'
import { Col, Input, Label } from 'reactstrap'

const FilledCheckboxs = () => {
  return (
   <Col xl='4' sm='6'>
     <div className='card-wrapper border rounded-3 h-100 checkbox-checked'>
        <h6 className='sub-title'>{FilledCheckbox}</h6>
        <div className='form-check checkbox checkbox-solid-warning'>
            <Input id='solid4' type='checkbox' defaultChecked/>
            <Label htmlFor='solid4' check>{WarningCheckboxSolidWarning}</Label>
        </div>
        <div className='form-check checkbox checkbox-solid-danger'>
            <Input id='solid5' type='checkbox' defaultChecked/>
            <Label htmlFor='solid5' check>{DangerCheckboxSolid}</Label>
        </div>
        <div className='form-check checkbox checkbox-solid-info'>
            <Input id='solid6' type='checkbox' defaultChecked/>
            <Label htmlFor='solid6' check>{InfoChekcboxSolid}</Label>
        </div>
     </div>
   </Col>
  )
}

export default FilledCheckboxs
