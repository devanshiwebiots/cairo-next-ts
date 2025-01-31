import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { SimpleHorizontalDividerr } from '@/Constant'
import { SimpleHorizontalDividerData, SimpleHorizontalDividerSpan } from '@/Data/Uikits/Divider'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const SimpleHorizontalDivider = () => {
  return (
     <Col md='6'>
        <Card>
            <CommonUIkitsComponent title={SimpleHorizontalDividerr} span={SimpleHorizontalDividerSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='main-divider'>
             {SimpleHorizontalDividerData.map((data, i) => (
                <div className={`divider-h-line bg-${data.color} ${data.className}`} key={i}></div>
             ))}
            </CardBody>
        </Card>
     </Col>
  )
}

export default SimpleHorizontalDivider
