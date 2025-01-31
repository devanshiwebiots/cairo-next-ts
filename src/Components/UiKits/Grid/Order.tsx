import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { OrderCodetitle, OrderHeading, OrderValueData } from '@/Constant'
import { OrderDataa, OrderSpan } from '@/Data/Uikits/Grid'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import GridCommonCardFooter from './Common/CommonCardFooter'

const Order = () => {
  return (
    <Col sm='12'>
        <Card>
            <CommonUIkitsComponent title={OrderHeading} span={OrderSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <div className='grid-showcase'>
                    <Row className='g-2'>
                        {OrderDataa.map(({column, item, order, className}, index) => (
                            <div className={`col-${column} ${order} ${className}`} key={index}><span>{item} {`(${order})`}</span></div>
                        ))}
                    </Row>
                </div>
            </CardBody>
            <GridCommonCardFooter className={OrderCodetitle} valueClass={OrderValueData}/>
        </Card>
    </Col>
  )
}

export default Order
