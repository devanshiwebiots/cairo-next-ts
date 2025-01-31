import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { VariationBordersDisplay } from '@/Constant'
import { VariationBordersAndDisplaysSpan } from '@/Data/Uikits/HelperClasses'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import AdditiveBorder from './AdditiveBorder'
import AdditiveRadius from './AdditiveRadius'
import SubtractiveBorder from './SubtractiveBorder'

const VariationBordersAndDisplays = () => {
  return (
    <Col className='col-12'>
        <Card>
            <CommonUIkitsComponent title={VariationBordersDisplay} span={VariationBordersAndDisplaysSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <Row className='g-3'>
                    <AdditiveBorder />
                    <SubtractiveBorder />
                    <AdditiveRadius />
                </Row>
            </CardBody>
        </Card>
    </Col>
  )
}

export default VariationBordersAndDisplays
