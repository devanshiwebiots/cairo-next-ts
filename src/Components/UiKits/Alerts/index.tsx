import React from 'react'
import { Container, Row } from 'reactstrap'
import IconsAndTextActions from '../IconsAndTextActions'
import LightTheme from './ LightTheme'
import AdditionalContents from './AdditionalContents'
import CustomAlertPopup from './CustomAlertPopup'
import DarkTheme from './DarkTheme'
import DismissingDarkAlert from './DismissingDarkAlert'
import DismissingLightAlert from './DismissingLightAlert'
import IconsWithAlerts from './IconsWithAlerts'
import LeftBorderAlert from './LeftBorderAlert'
import LiveAlert from './LiveAlert'
import OutlineAlert from './OutlineAlert'

const AlertsContainer = () => {
  return (
  <Container fluid>
    <Row>
        <DarkTheme />
        <LightTheme />
        <OutlineAlert />
        <IconsAndTextActions />
        <LiveAlert />
        <DismissingLightAlert />
        <DismissingDarkAlert />
        <LeftBorderAlert />
        <CustomAlertPopup />
        <IconsWithAlerts />
        <AdditionalContents />
    </Row>
  </Container>
  )
}

export default AlertsContainer
