import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { FlatButtonGroups } from '@/Constant'
import { ButtonGroupData } from '@/Data/Buttons/ButtonGroup'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonGroupButton from './Common/CommonGroupButton'

const FlatButtonGroup = () => {
  return (
    <Col sm='12'>
        <Card>
            <CommonCardHeader title={FlatButtonGroups} headClass='pb-0'/>
            <CardBody className='btn-group-showcase'>
                <Row>
                <CommonGroupButton data={ButtonGroupData}  buttonClass="btn-group-square" />
                </Row>
            </CardBody>
        </Card>
    </Col>
  )
}

export default FlatButtonGroup
