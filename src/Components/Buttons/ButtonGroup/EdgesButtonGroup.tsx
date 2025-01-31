import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { EdgesButtonGroups } from '@/Constant'
import { ButtonGroupData } from '@/Data/Buttons/ButtonGroup'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonGroupButton from './Common/CommonGroupButton'

const EdgesButtonGroup = () => {
  return (
     <Col sm='12'>
        <Card>
            <CommonCardHeader title={EdgesButtonGroups} headClass='pb-0'/>
            <CardBody className='btn-group-showcase'>
                <Row>
                <CommonGroupButton data={ButtonGroupData}  buttonClass="btn-group-pill" />
                </Row>
            </CardBody>
        </Card>
     </Col>
  )
}

export default EdgesButtonGroup
