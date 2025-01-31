import React from 'react'
import { Container, Row } from 'reactstrap'
import BordersWithIcons from './BordersWithIcons'
import CustomSwitch from './CustomSwitch'
import DisabledOutlineSwitch from './DisabledOutlineSwitch'
import Iconsswitch from './Iconsswitch'
import SwitchSizing from './SwitchSizing'
import SwitchWithIcons from './SwitchWithIcons'
import UncheckedSwitch from './UncheckedSwitch'
import VariationOfSwitches from './VariationOfSwitches'

const SwitchesContainer = () => {
  return (
    <Container fluid>
        <Row>
            <CustomSwitch />
            <Iconsswitch />
            <UncheckedSwitch />
            <BordersWithIcons />
            <DisabledOutlineSwitch />
            <VariationOfSwitches />
            <SwitchSizing />
            <SwitchWithIcons />
        </Row>
    </Container>
  )
}

export default SwitchesContainer
