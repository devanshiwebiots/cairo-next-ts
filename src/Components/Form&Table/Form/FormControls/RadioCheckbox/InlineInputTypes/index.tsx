import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { InlineInputType } from '@/Constant'
import { InlineInputData } from '@/Data/Form& Table/Form'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import InlineCheckboxs from './InlineCheckboxs'
import InlineRadios from './InlineRadios'
import InlineSwitche from './InlineSwitche'

const InlineInputTypes = () => {
  return (
   <Col sm='12'>
    <Card>
        <CommonCardHeader title={InlineInputType} span={InlineInputData}/>
        <CardBody>
            <Row className='g-3'>
                <InlineCheckboxs />
                <InlineRadios />
                <InlineSwitche />
            </Row>
        </CardBody>
    </Card>
   </Col>
  )
}

export default InlineInputTypes
