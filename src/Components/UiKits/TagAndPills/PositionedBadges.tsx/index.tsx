import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { PositionedBadgesCart } from '@/Constant'
import { PositionedBadgesSpan } from '@/Data/Uikits/TagAndPills'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import ButtonBadges from '../ButtonBadges'
import PositionedBadgesBody from './PositionedBadgesBody'

const PositionedBadges = () => {
  return (
   <Col sm='12' xl='6' className='box-col-12'>
     <Row>
        <Col className='col-12'>
            <Card>
                <CommonUIkitsComponent title={PositionedBadgesCart} span={PositionedBadgesSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
                <CardBody>
                    <PositionedBadgesBody />
                </CardBody>
            </Card>
        </Col>
     </Row>
     <ButtonBadges />
   </Col>
  )
}

export default PositionedBadges
