import React from 'react'
import { Container, Row } from 'reactstrap'
import AnimatedButtons from './AnimatedButtons'
import BasicRadioAndCheckbox from './BasicRadioAndCheckbox'
import CustomCheckbox from './CustomCheckbox'
import CustomRadio from './CustomRadio'
import DefaultCheckbox from './DefaultCheckbox'
import DefaultRadio from './DefaultRadio'
import DefaultSwitches from './DefaultSwitches'
import ImagesWithCheckbox from './ImagesWithCheckbox'
import ImagesWithRadio from './ImagesWithRadio'
import InlineInputTypes from './InlineInputTypes'
import OutlinedCheckboxStyles from './OutlinedCheckboxStyles'
import RadioToggleButtons from './RadioToggleButtons'

const RadioCheckboxContainer = () => {
  return (
    <Container fluid>
        <Row>
            <DefaultCheckbox />
            <CustomCheckbox />
            <DefaultRadio />
            <ImagesWithCheckbox />
            <ImagesWithRadio />
            <CustomRadio />
            <DefaultSwitches />
            <InlineInputTypes />
            <AnimatedButtons />
            <BasicRadioAndCheckbox />
            <RadioToggleButtons />
            <OutlinedCheckboxStyles />
        </Row>
    </Container>
  )
}

export default RadioCheckboxContainer
