import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { Vertical_Gutters } from '@/Constant'
import { VerticalGuttersData, VerticalGuttersSpan } from '@/Data/Uikits/Grid'
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'

const VerticalGutters = () => {
  return (
    <Col xl='6'>
        <Card className='height-equal-2'>
            <CommonUIkitsComponent title={Vertical_Gutters} span={VerticalGuttersSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='v-gutter'>
                <Container className='overflow-hidden text-center'>
                    <Row className='gy-3'>
                        {VerticalGuttersData.map((data,index) => (
                            <Col className='col-6' key={index}>
                                <div className='p-3'>
                                    <span>{data}</span>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </CardBody>
        </Card>
    </Col>
  )
}

export default VerticalGutters
