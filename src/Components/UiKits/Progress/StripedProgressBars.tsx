import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { StripedProgressBar } from '@/Constant'
import { StripedProgressBarsData, StripedProgressBarsSpan } from '@/Data/Uikits/Progress'
import React from 'react'
import { Card, CardBody, Col, Progress } from 'reactstrap'

const StripedProgressBars = () => {
  return (
   <Col xl='6'>
     <Card>
        <CommonUIkitsComponent title={StripedProgressBar} span={StripedProgressBarsSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody className='progress-showcase'>
            <Progress color='primary' striped value={'10'}/>
            {StripedProgressBarsData.map(({color, value}, index) => (
                <Progress color={color} value={value} key={index} striped/>
            ))}
        </CardBody>
     </Card> 
   </Col>
  )
}

export default StripedProgressBars
