import React from 'react'
import { Container, Row } from 'reactstrap'
import BasicFloatingInputControl from './BasicFloatingInputControl'
import BasicForm from './BasicForm'
import BasicHtmlInputControl from './BasicHtmlInputControl'
import EdgesInputStyle from './EdgesInputStyle'
import FileInput from './FileInput'
import FlatInputStyle from './FlatInputStyle'
import FloatingForm from './FloatingForm'
import FormControlSizing from './FormControlSizing'
import RaiseInputStyle from './RaiseInputStyle'
import SelectSizing from './SelectSizing'

const BaseInputContainer = () => {
  return (
    <Container fluid>
        <Row>
            <BasicForm />
            <FloatingForm />
            <SelectSizing />
            <FormControlSizing />
            <FileInput />
            <FlatInputStyle />
            <BasicHtmlInputControl />
            <BasicFloatingInputControl />
            <EdgesInputStyle />
            <RaiseInputStyle />
        </Row>
    </Container>
  )
}

export default BaseInputContainer
