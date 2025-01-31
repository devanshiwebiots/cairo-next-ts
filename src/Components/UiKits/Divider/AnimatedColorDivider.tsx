import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { AnimatedColorDividerr, MainHeadingTxt } from '@/Constant'
import { AnimatedCOlorDividerData, AnimatedColorDividerSpan } from '@/Data/Uikits/Divider'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const AnimatedColorDivider = () => {
  return (
     <Col md='6'>
        <Card>
            <CommonUIkitsComponent title={AnimatedColorDividerr} span={AnimatedColorDividerSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='linear-divider'>
                <h5>{MainHeadingTxt}</h5>
                <div className='animated-divider animated-line'></div>
                <p className='mb-0 c-light'>{AnimatedCOlorDividerData}</p>
            </CardBody>
        </Card>
     </Col>
  )
}

export default AnimatedColorDivider
