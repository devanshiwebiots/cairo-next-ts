import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { VariationTimelines } from '@/Constant'
import { VariationTimeLineData } from '@/Data/BonusUi/TimeLine'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DynamicVariationTimeline from './DynamicVariationTimeline'

const VariationTimeline = () => {
  return (
    <Col xxl='4' className='notification box-col-12'>
        <Card>
            <CommonCardHeader title={VariationTimelines} span={VariationTimeLineData} spanClass='mt-1 mb-0' headClass='pb-0'/>
             <CardBody className='dark-timeline'>
                <ul className='simple-list'>
                    <DynamicVariationTimeline />
                </ul>
             </CardBody>
        </Card> 
    </Col>
  )
}

export default VariationTimeline
