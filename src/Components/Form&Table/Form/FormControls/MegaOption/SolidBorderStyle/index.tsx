import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { SolidBorderStyles } from '@/Constant'
import { SolidBorderStyleData } from '@/Data/Form& Table/Form'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardFooter from '../DefaultStyle/Common/CommonCardFooter'
import SolidBorderStyleForm from './SolidBorderStyleForm'

const SolidBorderStyle = () => {
  return (
   <Col sm='12' xxl='6' className='box-col-6'>
    <Card>
        <CommonCardHeader title={SolidBorderStyles} span={SolidBorderStyleData} headClass='pb-0' spanClass='mt-1 mb-0'/>
        <CardBody>
            <SolidBorderStyleForm />
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="primary" color2="light"/>
    </Card>
   </Col>
  )
}

export default SolidBorderStyle
