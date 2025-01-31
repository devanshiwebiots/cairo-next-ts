import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { CustomRadios } from '@/Constant'
import { CustomRadioData } from '@/Data/Form& Table/Form'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import BorderedRadio from './BorderedRadio'
import FilledRadio from './FilledRadio'
import IconsRadio from './IconsRadio'

const CustomRadio = () => {
  return (
  <Col sm='12'>
     <Card>
        <CommonCardHeader title={CustomRadios} span={CustomRadioData} headClass='pb-0' spanClass='mt-1 mb-0'/>
        <CardBody>
            <Row className='g-3'>
                <BorderedRadio />
                <IconsRadio />
                <FilledRadio />
            </Row>
        </CardBody>
     </Card>
  </Col>
  )
}

export default CustomRadio
