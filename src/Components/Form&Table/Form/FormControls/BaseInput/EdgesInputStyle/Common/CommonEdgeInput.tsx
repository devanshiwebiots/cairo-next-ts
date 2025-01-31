import { CommonEdgeRaisedInputProp } from '@/Types/FormType'
import React from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'

const CommonEdgeInput: React.FC<CommonEdgeRaisedInputProp> = ({inputType,label, placeholder, inputClass, rows}) => {
  return (
    <Row>
        <Col>
        <FormGroup>
            <Label check>{label}</Label>
            <Input className={`btn-pill ${inputClass}`} type={inputType} placeholder={placeholder} rows={rows} autoComplete='off'/>
        </FormGroup>
        </Col>
    </Row>
  )
}

export default CommonEdgeInput
