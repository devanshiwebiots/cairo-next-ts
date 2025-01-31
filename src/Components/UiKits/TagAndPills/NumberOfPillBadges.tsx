import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { NumberOfPillBadgesCart } from '@/Constant'
import { NumberPillData, NumberPillOfBadgesSpan } from '@/Data/Uikits/TagAndPills'
import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonTagAndPillsCardBody from './Common/CommonTagAndPillsCardBody'

const NumberOfPillBadges = () => {
  return (
    <Col sm='12' xl='6'>
        <Card>
            <CommonUIkitsComponent title={NumberOfPillBadgesCart} span={NumberPillOfBadgesSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CommonTagAndPillsCardBody data= {NumberPillData}/>
        </Card>
    </Col>
  )
}

export default NumberOfPillBadges
