import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { MasonryGalleryCap } from '@/Constant'
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import MasonryGalleryBody from './MasonryGalleryBody'

const MasonryGalleryContainer = () => {
  return (
     <Container fluid>
        <Row>
            <Col sm='12' className='box-col-12'>
                <Card className='pb-3'>
                    <CommonCardHeader title={MasonryGalleryCap} headClass='pb-0'/>
                    <CardBody className='photoswipe-pb-responsive'>
                        <MasonryGalleryBody />
                    </CardBody>
                </Card>
            </Col>
        </Row>
     </Container>
  )
}

export default MasonryGalleryContainer
