import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { VerticalStyles } from '@/Constant'
import { VerticalStyleData } from '@/Data/Form& Table/Form'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardFooter from '../DefaultStyle/Common/CommonCardFooter'
import VerticalStyleForm from './VerticalStyleForm'

const VerticalStyle = () => {
  return (
     <Col sm='12' xxl='6' className='box-col-12'>
        <Card className='height-equal'>
            <CommonCardHeader title={VerticalStyles} span={VerticalStyleData} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CardBody>
                <VerticalStyleForm />
            </CardBody>
            <CommonCardFooter footerClass="text-end" color1="primary" color2="light" />
        </Card>
     </Col>
  )
}

export default VerticalStyle
