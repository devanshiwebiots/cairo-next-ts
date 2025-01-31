import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { LatestNewsAndTrend } from '@/Constant'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import LatestNewsAndTrendsBody from './LatestNewsAndTrendsBody'

const LatestNewsAndTrends = () => {
  return (
     <Col sm='12'>
        <Card>
            <CommonCardHeader title={LatestNewsAndTrend} headClass='pb-0'/>
             <CardBody>
                <Row className='gy-3'>
                    <LatestNewsAndTrendsBody />
                </Row>
             </CardBody>
        </Card>
     </Col>
  )
}

export default LatestNewsAndTrends
