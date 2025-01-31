import React from 'react'
import { Container, Row } from 'reactstrap'
import RowCreateCallback from './RowCreateCallback'
import StockResult from './StockResult'

const AdvanceInitContainer = () => {
  return (
    <Container fluid>
        <Row>
            <StockResult />
            <RowCreateCallback />
        </Row>
    </Container>
  )
}

export default AdvanceInitContainer
