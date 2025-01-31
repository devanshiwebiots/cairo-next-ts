import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { FeatherIcons } from '@/Constant'
import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import FeatherIconCardBody from './FeatherIconCardBody'

const FeatherIconContainer = () => {
  return (
     <Container fluid>
        <Row>
            <Col sm='12'>
                <Card>
                    <CommonCardHeader title={FeatherIcons} headClass='pb-0'/>
                    <FeatherIconCardBody />
                </Card>
            </Col>
        </Row>
     </Container>
  )
}

export default FeatherIconContainer
