import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { HoverData } from '@/Data/Gallery'
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import ImageHoverEffectsBody from './ImageHoverEffectsBody'

const HoverEffectContainer = () => {
  return (
     <Container fluid>
        {HoverData.map((data, index) => (
            <Row key={index}>
                <Col sm='12'>
                    <Card>
                        <CommonCardHeader title={`Hover Effect ${data}`} headClass='pb-0'/>
                        <CardBody className='pb-1'>
                            <ImageHoverEffectsBody data={data}/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        ))}
     </Container>
  )
}

export default HoverEffectContainer
