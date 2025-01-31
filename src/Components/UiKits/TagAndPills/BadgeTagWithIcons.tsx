import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { BadgeTagWithIconsCart } from '@/Constant'
import { BadgeTagwithIconsSpan, BadgeWithIconData } from '@/Data/Uikits/TagAndPills'
import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonTagAndPillsCardBody from './Common/CommonTagAndPillsCardBody'

const BadgeTagWithIcons = () => {
  return (
    <Col sm='12' xl='6'>
        <Card>
            <CommonUIkitsComponent title={BadgeTagWithIconsCart} span={BadgeTagwithIconsSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CommonTagAndPillsCardBody number={BadgeWithIconData}/>
        </Card>
    </Col>
  )
}

export default BadgeTagWithIcons
