import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { OutlineEdgeButton } from '@/Constant'
import { ButtonGroupData } from '@/Data/Buttons/ButtonGroup'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonGroupButton from './Common/CommonGroupButton'

const OutlineEdgesButton = () => {
  return (
    <Col sm="12">
    <Card>
      <CommonCardHeader title={OutlineEdgeButton} headClass='pb-0'/>
      <CardBody className="btn-group-showcase">
        <Row>
          <CommonGroupButton data={ButtonGroupData}  buttonClass="btn-group-pill" outline={true} />
        </Row>
      </CardBody>
    </Card>
  </Col>
  )
}

export default OutlineEdgesButton
