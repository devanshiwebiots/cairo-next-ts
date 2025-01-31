import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { CustomAnimationplaceholder } from '@/Constant'
import { CustomAnimationPlaceholderSpan } from '@/Data/Uikits/Placeholder'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import SquarePlaceholder from './SquarePlaceholder'

const CustomAnimationPlaceholder = () => {
  return (
     <Col md='6'>
        <Card>
            <CommonUIkitsComponent title={CustomAnimationplaceholder} span={CustomAnimationPlaceholderSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <Row className='gy-3'>
                    <SquarePlaceholder />
                </Row>
            </CardBody>
        </Card>
     </Col>
  )
}

export default CustomAnimationPlaceholder
