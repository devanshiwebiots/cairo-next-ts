import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { onlyOneSidePadding } from '@/Constant'
import { OneSidePaddingSpan } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import PaddingBottom from './PaddingBottom'
import PaddingLeft from './PaddingLeft'
import PaddingRight from './PaddingRight'
import PaddingTop from './PaddingTop'

const OneSidePadding = () => {
  return (
     <Col xl='12'>
         <Card>
            <CommonUIkitsComponent title={onlyOneSidePadding} span={OneSidePaddingSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <Row className='g-3'>
                    <PaddingLeft />
                    <PaddingRight />
                    <PaddingTop />
                    <PaddingBottom />
                </Row>
            </CardBody>
         </Card>
     </Col>
  )
}

export default OneSidePadding
