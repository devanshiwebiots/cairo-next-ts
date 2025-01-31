import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { CustomcolumnPadding, Horizontalgutters } from '@/Constant'
import { HorizontalGuttersSpan } from '@/Data/Uikits/Grid'
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'

const HorizontalGutters = () => {
  return (
   <Col xl='7'>
     <Card className='height-equal'>
        <CommonUIkitsComponent title={Horizontalgutters} span={HorizontalGuttersSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody className='h-gutter'>
            <Container className='px-4 text-center'>
                <Row className='gx-5 gy-sm-0 g-3'>
                    <Col>
                    <div className="p-3"> <span>{CustomcolumnPadding}</span></div>
                    </Col>
                    <Col>
                    <div className="p-3"> <span>{CustomcolumnPadding}</span></div>
                    </Col>
                </Row>
            </Container>
        </CardBody>
     </Card>
   </Col>
  )
}

export default HorizontalGutters
