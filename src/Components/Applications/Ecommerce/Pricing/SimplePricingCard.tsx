import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { Purchase, SimplePricingCards } from '@/Constant'
import { SimplePricingCardData } from '@/Data/Ecommerce'
import React from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'

const SimplePricingCard = () => {
  return (
    <Card>
        <CommonCardHeader title={SimplePricingCards} headClass='pb-0'/>
        <CardBody className=' pricing-content'>
            <Row className='g-sm-4 g-3'>
                {SimplePricingCardData.map((item, index) => (
                    <Col lg='3' sm='6' className='box-col-3' key={index}>
                        <Card className='text-center pricing-simple'>
                            <CardBody>
                                <h3>{item.title}</h3>
                                <h5>${item.amount}</h5>
                                <h6 className='mb-0'>{item.title} Plan</h6>
                            </CardBody>
                            <Button color='primary' className='btn-block' size='lg'>{Purchase}</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </CardBody>
    </Card>
  )
}

export default SimplePricingCard
