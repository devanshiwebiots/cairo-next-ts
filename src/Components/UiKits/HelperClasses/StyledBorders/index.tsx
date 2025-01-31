import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { Styledborder } from '@/Constant'
import { StyledBordersSpan } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import BorderColor from './BorderColor'
import BorderRadius from './BorderRadius'
import BorderWidth from './BorderWidth'
import TextColors from './TextColors'

const StyledBorders = () => {
  return (
    <Col className='col-12'>
        <Card>
            <CommonUIkitsComponent title={Styledborder} span={StyledBordersSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <Row className='g-3'>
                    <BorderRadius />
                    <BorderColor />
                    <BorderWidth />
                    <TextColors />
                </Row>
            </CardBody>
        </Card>
    </Col>
  )
}

export default StyledBorders
