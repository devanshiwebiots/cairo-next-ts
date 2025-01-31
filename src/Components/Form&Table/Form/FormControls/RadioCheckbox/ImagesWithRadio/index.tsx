import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { ImagesWitRadios } from '@/Constant'
import { ImageWithRadioData } from '@/Data/Form& Table/Form'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CustomImagesWithRadio from './CustomImagesWithRadio'
import DynamicImagesWithRadio from './DynamicImagesWithRadio'

const ImagesWithRadio = () => {
  return (
     <Col sm='12'>
        <Card>
            <CommonCardHeader title={ImagesWitRadios} span={ImageWithRadioData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <div className='main-img-checkbox'>
                    <Row className='g-3'>
                        <CustomImagesWithRadio />
                        <DynamicImagesWithRadio />
                    </Row>
                </div>
            </CardBody>
        </Card>
     </Col>
  )
}

export default ImagesWithRadio
