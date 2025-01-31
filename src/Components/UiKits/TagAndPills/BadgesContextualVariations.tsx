import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { BadgesContextualVariationsCart } from '@/Constant'
import { BadgeSpan, BadgetsContext } from '@/Data/Uikits/TagAndPills'
import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonTagAndPillsCardBody from './Common/CommonTagAndPillsCardBody'

const BadgesContextualVariations = () => {
  return (
     <Col sm='12' xl='6'>
        <Card>
            <CommonUIkitsComponent title={BadgesContextualVariationsCart} span={BadgeSpan} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CommonTagAndPillsCardBody data = {BadgetsContext}/>
        </Card>
     </Col>
  )
}

export default BadgesContextualVariations
