import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { InitialProgressBar } from '@/Constant'
import { InitialProgressBarsSpan, InitialProgressData } from '@/Data/Uikits/Progress'
import React from 'react'
import { Card, CardBody, Col, Progress, Row } from 'reactstrap'

const InitialProgressBars = () => {
  return (
    <Col sm='12'>
        <Card>
            <CommonUIkitsComponent title={InitialProgressBar} span={InitialProgressBarsSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
             <CardBody className='progress-showcase'>
                <Row>
                    <Col>
                    <Progress value={'0'}/>
                     {InitialProgressData.map(({color, value, text}, index) => (
                        <Progress color={color} value={value} key={index}>{text}</Progress>
                     ))}
                    </Col>
                </Row>
             </CardBody>
        </Card>
    </Col>
  )
}

export default InitialProgressBars
