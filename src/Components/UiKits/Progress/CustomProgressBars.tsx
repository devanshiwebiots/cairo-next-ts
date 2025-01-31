import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { CustomProgressBar } from '@/Constant'
import { CustomProgressBarsData, CustomProgressBarsSpan } from '@/Data/Uikits/Progress'
import { Fragment } from 'react'
import { Card, CardBody, Col, Progress, Row } from 'reactstrap'

const CustomProgressBars = () => {
  return (
     <Col sm='12'>
        <Card>
            <CommonUIkitsComponent title={CustomProgressBar} span={CustomProgressBarsSpan} spanClass='mt-1  mb-0' headClass='pb-0'/>
            <CardBody className='progress-showcase'>
                <Row>
                    <Col>
                    {CustomProgressBarsData.map(({color, value, title, text}, index) => (
                        <Fragment key={index}>
                          <h6 className='mb-2'>{title}</h6>
                          <div className='progress mb-4'>
                            <Progress value={value} color={color} bar animated striped key={index}>{text}</Progress>
                          </div>
                        </Fragment>
                    ))}
                    </Col>
                </Row>
            </CardBody>
        </Card>
     </Col>
  )
}

export default CustomProgressBars
