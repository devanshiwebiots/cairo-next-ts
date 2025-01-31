import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { BadgeHeadingsCart } from '@/Constant'
import { BadgeHeadingsSpan } from '@/Data/Uikits/TagAndPills'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import BadgeHeadingsBody from './BadgeHeadingsBody'

const BadgeHeadings = () => {
  return (
  <Col xl='6' sm='12'>
    <Card>
        <CommonUIkitsComponent title={BadgeHeadingsCart} span={BadgeHeadingsSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
         <CardBody className='badge-heading'>
          <BadgeHeadingsBody />
         </CardBody>
    </Card>
  </Col>
  )
}

export default BadgeHeadings
