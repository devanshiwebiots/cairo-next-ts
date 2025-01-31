import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { backgroundcolor } from '@/Constant'
import { BackgroundColorsSpan } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import DarkBackground from './DarkBackground'
import ExtendedBackground from './ExtendedBackground'
import LightBackgrounds from './LightBackgrounds'

const BackgroundColors = () => {
  return (
    <Col className='col-12'>
        <Card>
            <CommonUIkitsComponent title={backgroundcolor} span={BackgroundColorsSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <Row className='g-3'>
                    <DarkBackground />
                    <LightBackgrounds />
                    <ExtendedBackground />
                </Row>
            </CardBody>
        </Card>
    </Col>
  )
}

export default BackgroundColors
