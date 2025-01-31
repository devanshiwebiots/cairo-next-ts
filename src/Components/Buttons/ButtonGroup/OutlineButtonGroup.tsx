import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { OutlineButtonGroups } from '@/Constant'
import { ButtonGroupData } from '@/Data/Buttons/ButtonGroup'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonGroupButton from './Common/CommonGroupButton'

const OutlineButtonGroup = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={OutlineButtonGroups} headClass='pb-0'/>
        <CardBody className="btn-group-showcase">
          <Row>
              <CommonGroupButton data={ButtonGroupData} outline={true} />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default OutlineButtonGroup
