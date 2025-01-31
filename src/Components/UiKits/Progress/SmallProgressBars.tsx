import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { SmallProgressBar } from '@/Constant'
import { SmallProgressBarsData, SmallProgressBarsSpan } from '@/Data/Uikits/Progress'
import React from 'react'
import { Card, CardBody, Col, Progress, Row } from 'reactstrap'

const SmallProgressBars = () => {
  return (
     <Col xl='6'>
        <Card style={{minHeight:'264.406px'}}>
            <CommonUIkitsComponent title={SmallProgressBar} span={SmallProgressBarsSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='progress-showcase progress-b-space'>
             <Row>
                <Col>
                <Progress color="primary" animated striped bar value="30" className="small-progressbar rounded-pill sm-progress-bar overflow-visible mt-4">
                <span className="txt-primary progress-label">30 MB Data</span>
                <span className="animate-circle"></span>
              </Progress>    
              { SmallProgressBarsData.map(({ value, title }, index) => (
                <Progress color="primary" animated striped bar value={value} className="small-progressbar rounded-pill sm-progress-bar overflow-visible mt-4" key={index}>
                  <span className="txt-primary progress-label">{title}</span>
                  <span className="animate-circle"></span>
                </Progress>
              ))}           
                </Col>
             </Row>
            </CardBody>
        </Card>
     </Col>
  )
}

export default SmallProgressBars
