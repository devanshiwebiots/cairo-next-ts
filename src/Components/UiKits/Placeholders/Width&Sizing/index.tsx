import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { WidthandSizing } from '@/Constant'
import { WidthAndSizingSpan } from '@/Data/Uikits/Placeholder'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import Sizing from './Sizing'
import Width from './Width'

const WidthAndSizing = () => {
  return (
    <Col xxl='6' className='box-col-12'>
        <Card>
            <CommonUIkitsComponent title={WidthandSizing} span={WidthAndSizingSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <Row className='gy-3'>
                    <Width />
                    <Sizing />
                </Row>
            </CardBody>
        </Card> 
    </Col>
  )
}

export default WidthAndSizing
