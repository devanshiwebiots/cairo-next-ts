import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { NunberOfBadgeCart } from '@/Constant'
import { NumberBadgeData, NumberOfBadgesSpan } from '@/Data/Uikits/TagAndPills'
import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonTagAndPillsCardBody from './Common/CommonTagAndPillsCardBody'

const NumberOfBadges = () => {
  return (
     <Col sm='12' xl='6'>
        <Card>
            <CommonUIkitsComponent title={NunberOfBadgeCart} span={NumberOfBadgesSpan} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CommonTagAndPillsCardBody number={NumberBadgeData}/>
        </Card>
     </Col>
  )
}

export default NumberOfBadges
