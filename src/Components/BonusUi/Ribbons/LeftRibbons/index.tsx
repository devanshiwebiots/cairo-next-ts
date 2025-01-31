import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { VariationsOfLeftRibbons } from '@/Constant'
import { LeftRibbonsData } from '@/Data/BonusUi/Ribbons'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import DynamicLeftRibbons from './DynamicLeftRibbons'
import StaticLeftRibbons from './StaticLeftRibbons'

const LeftRibbons = () => {
  return (
    <Row>
        <Col sm='12' xl='12'>
            <Card>
            <CommonCardHeader title={VariationsOfLeftRibbons} span={LeftRibbonsData} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CardBody>
             <Row className='g-3'>
                <StaticLeftRibbons />
                <DynamicLeftRibbons />
             </Row>
            </CardBody>
            </Card>
        </Col>
    </Row>
  )
}

export default LeftRibbons
