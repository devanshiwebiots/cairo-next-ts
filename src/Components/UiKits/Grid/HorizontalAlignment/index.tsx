import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { HorizontalAlignmentHeading, horizontalCode, ValueClass } from '@/Constant'
import { HorizontalAlignmentSpan } from '@/Data/Uikits/Grid'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import GridCommonCardFooter from '../Common/CommonCardFooter'
import HorizontalAlignmentBody from './HorizontalAlignmentBody'

const HorizontalAlignment = () => {
  return (
    <Col sm='12'>
        <Card>
            <CommonUIkitsComponent title={HorizontalAlignmentHeading} span={HorizontalAlignmentSpan} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CardBody>
                <HorizontalAlignmentBody />
            </CardBody>
            <GridCommonCardFooter valueClass={ValueClass} className={horizontalCode}/>
        </Card>
    </Col>
  )
}

export default HorizontalAlignment
