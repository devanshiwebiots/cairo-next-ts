import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { LightThemeTitle } from '@/Constant'
import { LightThemeSpan } from '@/Data/Uikits/Alerts'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import LightThemeLeftSide from './ LightThemeLeftSide'
import LightThemeRightSide from './LightThemeRightSide'

const  LightTheme = () => {
  return (
  <Col xl='12'>
     <Card>
        <CommonUIkitsComponent title={LightThemeTitle} span={LightThemeSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody>
            <Row className='gy-3'>
                <LightThemeLeftSide />
                <LightThemeRightSide />
            </Row>
        </CardBody>
     </Card>
  </Col>
  )
}

export default  LightTheme
