import { Close, Gridmodal, Save } from '@/Constant'
import { GridCommonModalProps } from '@/Types/UikitsType'
import React from 'react'
import { Button, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'

const GridCommonModal: React.FC<GridCommonModalProps> = ({isOpen, toggle}) => {
  return (
     <Modal isOpen={isOpen} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>{Gridmodal}</ModalHeader>
        <ModalBody>
        <Container fluid>
          <Row className="common-align">
            <Col md="4">
              <span className="grid-space bg-light-secondary txt-secondary">.col-md-4</span>
            </Col>
            <Col md="4" className="ms-auto">
              <span className="grid-space bg-light-secondary txt-secondary">.col-md-4 .ms-auto</span>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="3" className="ms-auto">
              <span className="grid-space bg-light-secondary txt-secondary">.col-md-3 .ms-auto</span>
            </Col>
            <Col md="2" className="ms-auto">
              <span className="grid-space bg-light-secondary txt-secondary">.col-md-2 .ms-auto</span>
            </Col>
          </Row>
          <Row>
            <Col md="6" className="ms-auto">
              <span className="grid-space bg-light-secondary txt-secondary">.col-md-6 .ms-auto</span>
            </Col>
          </Row>
          <Row className="common-align">
            <Col sm="9">
              <span className="grid-space bg-light-secondary txt-secondary">Level 1: .col-sm-9</span>
              <Row>
                <Col xs="8" sm="6">
                  <span className="grid-space bg-light-secondary txt-secondary mb-0"> Level 2: .col-8 .col-sm-6</span>
                </Col>
                <Col xs="4" sm="6">
                  <span className="grid-space bg-light-secondary txt-secondary mb-0">Level 2: .col-4 .col-sm-6</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>{Close}</Button>
        <Button color="primary">{Save}</Button>
      </ModalFooter>
     </Modal>
  )
}

export default GridCommonModal
