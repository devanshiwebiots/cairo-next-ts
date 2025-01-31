import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { NestingHeading } from '@/Constant'
import { NestingSpan } from '@/Data/Uikits/Grid'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import NestingBody from './NestingBody'

const Nesting = () => {
  return (
    <Col sm='12'>
        <Card>
            <CommonUIkitsComponent title={NestingHeading} span={NestingSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <div className='grid-showcase'>
                    <Row className='g-3'>
                        <NestingBody />
                    </Row>
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default Nesting
