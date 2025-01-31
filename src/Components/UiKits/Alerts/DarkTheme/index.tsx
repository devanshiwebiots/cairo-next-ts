import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { DarkThemeTitle } from '@/Constant'
import { DarkThemeSpan } from '@/Data/Uikits/Alerts'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import DarkThemeLeftSide from './DarkThemeLeftSide'
import DarkThemeRightSide from './DarkThemeRightSide'

const DarkTheme = () => {
  return (
    <Col xl='12'>
        <Card>
            <CommonUIkitsComponent title={DarkThemeTitle} span={DarkThemeSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <Row className='gy-3'>
                    <DarkThemeLeftSide />
                    <DarkThemeRightSide />
                </Row>
            </CardBody>
        </Card>
    </Col>
  )
}

export default DarkTheme
