import { ImagePath } from '@/Constant'
import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import TechnologyAndBusinessBody from './TechnologyAndBusinessBody'
import RatioImage from '@/CommonComponent/RatioImage'

const TechnologyAndBusiness = () => {
  return (
    <Col sm='12'>
        <Card className='blog-detail'>
            <CardHeader className='pb-0 border-0'>
                <RatioImage src={`${ImagePath}/blog/blog-detail.jpg`} className='img-fluid w-100'/>
            </CardHeader>
            <CardBody>
                <TechnologyAndBusinessBody />
            </CardBody>
        </Card>
    </Col>
  )
}

export default TechnologyAndBusiness
