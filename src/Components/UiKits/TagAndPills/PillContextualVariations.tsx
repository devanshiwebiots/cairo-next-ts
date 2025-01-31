import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { PillContextualVariationsCart } from '@/Constant'
import { PillContextualVariationsSpan, PillsContext } from '@/Data/Uikits/TagAndPills'
import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonTagAndPillsCardBody from './Common/CommonTagAndPillsCardBody'

const PillContextualVariations = () => {
  return (
    <Col sm='12' xl='6'>
        <Card>
            <CommonUIkitsComponent title={PillContextualVariationsCart} span={PillContextualVariationsSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CommonTagAndPillsCardBody data={PillsContext} pill/>
        </Card> 
    </Col>
  )
}

export default PillContextualVariations
