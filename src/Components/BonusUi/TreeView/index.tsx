import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import BasicTrees from './BasicTrees'
import DisabledTree from './DisabledTree'

const TreeViewContainer = () => {
  return (
    <Container fluid>
        <Row>
            <Col md='6'>
                <BasicTrees />
            </Col>
            <Col md='6'>
                <DisabledTree />
            </Col>
        </Row>
    </Container>
  )
}

export default TreeViewContainer
