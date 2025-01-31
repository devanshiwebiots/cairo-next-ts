import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { Horizontaldotteddivider } from '@/Constant'
import { HorizontalDottedDividerData, HorizontalDottedDividerSpan } from '@/Data/Uikits/Divider'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const HorizontalDottedDivider = () => {
  return (
   <Col xxl='4' md='6' className='box-col-6'>
      <Card>
         <CommonUIkitsComponent title={Horizontaldotteddivider} span={HorizontalDottedDividerSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
         <CardBody className='main-divider'>
            {HorizontalDottedDividerData.map((data, i) => (
                <div className={`divider-body divider-body-3 ${data.className} divider-${data.color}`} key={i}>{data.title}</div>
            ))}
         </CardBody>
      </Card>
   </Col>
  )
}

export default HorizontalDottedDivider
