import React from 'react'
import { Container, Row } from 'reactstrap'
import BasicInputGroups from './BasicInputGroups'
import ButtonAddons from './ButtonAddons'
import ButtonsWithDropdowns from './ButtonsWithDropdowns'
import CheckboxesAndRadios from './CheckboxesAndRadios'
import CustomFileInput from './CustomFileInput'
import CustomForms from './CustomForms'
import MultipleInputs from './MultipleInputs'
import SegmentedButtons from './SegmentedButtons'
import Sizing from './Sizing'
import VariationOfAddons from './VariationOfAddons'

const InputGroupContainer = () => {
  return (
  <Container fluid>
     <Row>
        <ButtonAddons />
        <CustomForms />
        <CustomFileInput />
        <ButtonsWithDropdowns />
        <SegmentedButtons />
        <CheckboxesAndRadios />
        <Sizing />
        <MultipleInputs />
        <BasicInputGroups />
        <VariationOfAddons />
     </Row>
  </Container>
  )
}

export default InputGroupContainer
