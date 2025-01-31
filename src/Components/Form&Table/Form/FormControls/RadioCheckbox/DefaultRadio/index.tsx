import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { DefaultRadios } from '@/Constant'
import { DefaultRadioData } from '@/Data/Form& Table/Form'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CustomRadios from './CustomRadios'
import DefaultRadioDataa from './DefaultRadioData'

const DefaultRadio = () => {
  return (
   <Col sm='12'>
    <Card>
        <CommonCardHeader title={DefaultRadios} span={DefaultRadioData} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody>
         <Row className='g-3'>
            <CustomRadios />
            <DefaultRadioDataa />
         </Row>
        </CardBody>
    </Card>
   </Col>
  )
}

export default DefaultRadio
