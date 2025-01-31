import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { OutlineAlets } from '@/Constant'
import { OutlineAlertSpan } from '@/Data/Uikits/Alerts'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import OutlineAlertLeftSide from './OutlineAlertLeftSide'
import OutlineAlertRightSide from './OutlineAlertRightSide'

const OutlineAlert = () => {
  return (
    <Col sm='12'>
        <Card>
            <CommonUIkitsComponent title={OutlineAlets} span={OutlineAlertSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='outline-alerts'>
                <Row className='gy-3'>
                    <OutlineAlertLeftSide />
                    <OutlineAlertRightSide />
                </Row>
            </CardBody>
        </Card>
    </Col>
  )
}

export default OutlineAlert
