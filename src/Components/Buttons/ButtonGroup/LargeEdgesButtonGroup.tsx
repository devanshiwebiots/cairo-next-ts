import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { LargeEdgesButtonGroups } from '@/Constant'
import { ButtonGroupData } from '@/Data/Buttons/ButtonGroup'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonGroupButton from './Common/CommonGroupButton'

const LargeEdgesButtonGroup = () => {
  return (
     <Col sm='12'>
        <Card>
            <CommonCardHeader title={LargeEdgesButtonGroups} headClass='pb-0'/>
            <CardBody className='btn-group-showcase'>
                <Row>
                <CommonGroupButton data={ButtonGroupData}  buttonClass="btn-group-pill" size="lg" />
                </Row>
            </CardBody>
        </Card>
     </Col>
  )
}

export default LargeEdgesButtonGroup
