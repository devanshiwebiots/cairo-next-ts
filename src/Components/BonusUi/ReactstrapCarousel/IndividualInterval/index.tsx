import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { IndividualIntervals } from '@/Constant'
import { IndividualIntervalData } from '@/Data/ReactstrapCarousel'
import CommonCarousel from '@/Components/BonusUi/ReactstrapCarousel/Common/CommonCarousel'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import IndividualIntervalBody from './IndividualIntervalBody'

const IndividualInterval = () => {
  return (
    <Col xl='6' className='col-12'>
        <Card>
            <CommonCardHeader title={IndividualIntervals} span={IndividualIntervalData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
             <IndividualIntervalBody />
            </CardBody>
        </Card>
    </Col>
  )
}

export default IndividualInterval
