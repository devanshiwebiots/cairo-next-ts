import React from 'react'
import { Container, Row } from 'reactstrap'
import AnimatedHorizontalTabs from './AnimatedHorizontalTabs'
import ArrowTabs from './ArrowTabs'
import BackgroundPillTabs from './BackgroundPillTabs'
import BorderTabs from './BorderTabs'
import BottomTabs from './BottomTabs'
import IconsWithTabs from './IconsWithTabs'
import JustifyTabs from './JustifyTabs'
import MaterialStyleLeftTabs from './MaterialStyleLeftTabs'
import MaterialStyleTabs from './MaterialStyleTabs'
import PillsTabs from './PillsTabs'
import SimpleTabs from './SimpleTabs'
import VerticalTabs from './VerticalTabs'

const TabsContainer = () => {
  return (
     <Container fluid>
        <Row>
            <SimpleTabs />
            <IconsWithTabs />
            <VerticalTabs />
            <PillsTabs />
            <JustifyTabs />
            <MaterialStyleLeftTabs />
            <MaterialStyleTabs />
            <BorderTabs />
            <BackgroundPillTabs />
            <ArrowTabs />
            <BottomTabs />
            <AnimatedHorizontalTabs />
        </Row>
     </Container>
  )
}

export default TabsContainer
