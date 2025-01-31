import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { LargeButtonGroups } from '@/Constant'
import { ButtonGroupData } from '@/Data/Buttons/ButtonGroup'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonGroupButton from './Common/CommonGroupButton'

const LargeButtonGroup = () => {
  return (
    <Col sm='12'>
        <Card>
            <CommonCardHeader title={LargeButtonGroups} headClass='pb-0'/>
            <CardBody className='btn-group-showcase'>
                <Row>
                <CommonGroupButton data={ButtonGroupData} size="lg"  />
                </Row>
            </CardBody>
        </Card>
    </Col>
  )
}

export default LargeButtonGroup
