import React from 'react'
import { Container, Row } from 'reactstrap'
import BasicButtonGroup from './BasicButtonGroup'
import CheckBoxButtonGroup from './CheckBoxButtonGroup'
import EdgesButtonGroup from './EdgesButtonGroup'
import FlatButtonGroup from './FlatButtonGroup'
import LargeButtonGroup from './LargeButtonGroup'
import LargeEdgesButtonGroup from './LargeEdgesButtonGroup'
import Nesting from './Nesting'
import OutlineButtonGroup from './OutlineButtonGroup'
import OutlineCustomButtonGroup from './OutlineCustomButtonGroup'
import OutlineCustomButtonGroups from './OutlineCustomButtonGroups'
import OutlineEdgesButton from './OutlineEdgesButton'
import OutlineFlatButton from './OutlineFlatButton'
import RadioButtonGroup from './RadioButtonGroup'
import Vertical from './Vertical'

const ButtonGroupContainer = () => {
  return (
    <Container fluid>
        <Row>
            <BasicButtonGroup />
            <EdgesButtonGroup />
            <FlatButtonGroup />
            <LargeButtonGroup />
            <LargeEdgesButtonGroup />
            <OutlineCustomButtonGroup />
            <OutlineCustomButtonGroups />
            <OutlineButtonGroup />
            <OutlineEdgesButton />
            <OutlineFlatButton />
            <RadioButtonGroup />
            <CheckBoxButtonGroup />
            <Nesting />
            <Vertical />
        </Row>
    </Container>
  )
}

export default ButtonGroupContainer
