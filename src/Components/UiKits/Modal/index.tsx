import React from 'react'
import { Container, Row } from 'reactstrap'
import BasicModalCart from './BasicModalCart'
import CairoCustomModals from './CairoCustomModals'
import CenteredModal from './CenteredModal'
import FullScreenModals from './FullScreenModals'
import GridModal from './GridModal'
import ScrollingLongContentModal from './ScrollingLongContentModal'
import SizeModalCart from './SizeModalCart'
import StaticBackdropModal from './StaticBackdropModal'
import ToggleBetweenModals from './ToggleBetweenModals'

const ModalContainer = () => {
  return (
     <Container fluid>
        <Row>
            <BasicModalCart />
            <SizeModalCart />
            <FullScreenModals />
            <CenteredModal />
            <ToggleBetweenModals />
            <StaticBackdropModal />
            <GridModal />
            <ScrollingLongContentModal />
            <CairoCustomModals />
        </Row>
     </Container>
  )
}

export default ModalContainer
