
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CancelledOrders from './OrderHistoryData/CancelledOrders'
import NewOrders from './OrderHistoryData/NewOrders'
import ShippedOrders from './OrderHistoryData/ShippedOrders'

const OrderHistoryContainer = () => {
  return (
   <Container fluid>
    <Row>
        <Col sm='12'>
            <NewOrders />
            <ShippedOrders />
            <CancelledOrders />
        </Col>
    </Row>
   </Container>
  )
}

export default OrderHistoryContainer
