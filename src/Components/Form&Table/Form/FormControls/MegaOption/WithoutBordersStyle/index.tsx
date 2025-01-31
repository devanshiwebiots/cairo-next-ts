import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { WithoutBordersStyles } from '@/Constant'
import { WithoutBorderData } from '@/Data/Form& Table/Form'
import React from 'react'
import { Card, CardBody, CardDeck, Col } from 'reactstrap'
import CommonCardFooter from '../DefaultStyle/Common/CommonCardFooter'
import WithoutBordersStyleForm from './WithoutBordersStyleForm'

const WithoutBordersStyle = () => {
  return (
    <Col sm='12' xxl='6' className='box-col-6'>
        <Card>
            <CommonCardHeader title={WithoutBordersStyles} span={WithoutBorderData} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CardBody>
                <WithoutBordersStyleForm />
            </CardBody>
            <CommonCardFooter footerClass="text-end" color1="warning" color2="light-warning" btn2Class="list-light-warning"/>
        </Card>
    </Col>
  )
}

export default WithoutBordersStyle
