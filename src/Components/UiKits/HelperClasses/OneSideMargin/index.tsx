import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { JustOneSideMargin } from '@/Constant'
import { OneSideMarginSpan } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import MarginBottom from './MarginBottom'
import MarginLeft from './MarginLeft'
import MarginRight from './MarginRight'
import MarginTop from './MarginTop'

const OneSideMargin = () => {
  return (
    <Col xl='12'>
        <Card className='height-equal'>
            <CommonUIkitsComponent title={JustOneSideMargin} span={OneSideMarginSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <Row className='g-3'>
                    <MarginLeft />
                    <MarginRight />
                    <MarginTop />
                    <MarginBottom />
                </Row>
            </CardBody>
        </Card>
    </Col>
  )
}

export default OneSideMargin
