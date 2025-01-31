import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { HorizontalEditableDividerr } from '@/Constant'
import { HorizontalEditableDividerData, HorizontalEditableDividerSpan } from '@/Data/Uikits/Divider'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const HorizontalEditableDivider = () => {
  return (
    <Col md='6'>
        <Card>
            <CommonUIkitsComponent title={HorizontalEditableDividerr} span={HorizontalEditableDividerSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='main-divider horizontal-variation'>
                {HorizontalEditableDividerData.map((data, i) => (
                    <div className={`divider linear-line double-line ${data.className}`} key={i}>{data.title}</div>
                ))}
            </CardBody>
        </Card> 
    </Col>
  )
}

export default HorizontalEditableDivider
