import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { VariationsOfRightRibbons } from '@/Constant'
import { RightRibbonData } from '@/Data/BonusUi/Ribbons'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import DynamicRightRibbons from './DynamicRightRibbons'
import StaticRightRibbons from './StaticRightRibbons'

const RightRibbons = () => {
  return (
   <Row>
     <Col sm='12' xl='12'>
        <Card>
            <CommonCardHeader title={VariationsOfRightRibbons} span={RightRibbonData} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CardBody>
            <Row className='g-3'>
                <StaticRightRibbons />
                <DynamicRightRibbons />
            </Row>
            </CardBody>
        </Card>
     </Col>
   </Row>
  )
}

export default RightRibbons
