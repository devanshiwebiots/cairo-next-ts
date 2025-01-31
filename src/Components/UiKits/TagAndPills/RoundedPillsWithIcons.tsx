import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { RoundedPillsWithIconsCart } from '@/Constant'
import { RoundedPillData, RoundedPillsWithIconsSpan } from '@/Data/Uikits/TagAndPills'
import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonTagAndPillsCardBody from './Common/CommonTagAndPillsCardBody'

const RoundedPillsWithIcons = () => {
  return (
    <Col sm='12' xl='6'>
        <Card>
            <CommonUIkitsComponent title={RoundedPillsWithIconsCart} span={RoundedPillsWithIconsSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CommonTagAndPillsCardBody number={RoundedPillData}/>
        </Card>
    </Col>
  )
}

export default RoundedPillsWithIcons
