import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { iconWithAlert } from '@/Constant'
import { IconsWithAlertsSpan } from '@/Data/Uikits/Alerts'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import IconsWithAlertsLeftSide from './IconsWithAlertsLeftSide'
import IconsWithAlertsRightSide from './IconsWithAlertsRightSide'

const IconsWithAlerts = () => {
  return (
    <Col xl='12'>
        <Card>
            <CommonUIkitsComponent title={iconWithAlert} span={IconsWithAlertsSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='alerts-icon'>
                <Row className='gy-3'>
                    <IconsWithAlertsLeftSide />
                    <IconsWithAlertsRightSide />
                </Row>
            </CardBody>
        </Card>
    </Col>
  )
}

export default IconsWithAlerts
