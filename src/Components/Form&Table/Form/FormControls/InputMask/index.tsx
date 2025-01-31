import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { InputMasks } from '@/Constant'
import { InputMaskData } from '@/Data/Form& Table/Form'
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import DateFormat from './DateFormat'
import DefaultInputMaskForm from './DefaultInputMaskForm'
import TimeFormat from './TimeFormat'

const InputMaskContainer = () => {
  return (
    <Container fluid>
        <Row>
            <Col xs='12'>
                <Card>
                    <CommonCardHeader title={InputMasks} span={InputMaskData} headClass='pb-0' spanClass='mt-1 mb-0'/>
                    <CardBody>
                        <Row className='g-3'>
                         <DateFormat />
                         <TimeFormat />
                         <Col xs='12'>
                            <DefaultInputMaskForm />
                         </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default InputMaskContainer
