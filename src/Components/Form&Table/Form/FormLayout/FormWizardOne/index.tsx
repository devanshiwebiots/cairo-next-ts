import React from 'react'
import { Container, Row } from 'reactstrap'
import NumberingWizard from './NumberingWizard'
import ShippingForm from './ShippingForm'
import StudentValidationForm from './StudentValidationForm'
import VerticalValidationWizard from './VerticalValidationWizard'

const FormWizardOneContainer = () => {
  return (
   <Container fluid>
    <Row>
        <NumberingWizard />
        <StudentValidationForm />
        <VerticalValidationWizard />
        <ShippingForm />
    </Row>
   </Container>
  )
}

export default FormWizardOneContainer
