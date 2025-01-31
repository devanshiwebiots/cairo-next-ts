import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { DefaultStyleMegaOptions } from '@/Constant'
import { MegaOptionDefaultData } from '@/Data/Form& Table/Form'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardFooter from './Common/CommonCardFooter'
import DefaultStyleForm from './DefaultStyleForm'

const DefaultStyle = () => {
  return (
    <Col sm='12' xxl='6' className='box-col-6'>
        <Card>
            <CommonCardHeader title={DefaultStyleMegaOptions} span={MegaOptionDefaultData} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CardBody className='megaoptions-border-space-sm'>
                <DefaultStyleForm />
            </CardBody>
            <CommonCardFooter footerClass='text-end' color1='primary' color2='light'/>

        </Card>
    </Col>
  )
}

export default DefaultStyle
