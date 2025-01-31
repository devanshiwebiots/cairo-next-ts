import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { PaginationAlignments } from '@/Constant'
import { AlignmentPaginationData } from '@/Data/BonusUi/Paginations'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DynamicPaginationAlignment from './DynamicPaginationAlignment'
import StaticPaginationAlignment from './StaticPaginationAlignment'

const PaginationAlignment = () => {
  return (
    <Col xl='6'>
        <Card>
            <CommonCardHeader title={PaginationAlignments} span={AlignmentPaginationData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <StaticPaginationAlignment />
                <DynamicPaginationAlignment />
            </CardBody>
        </Card>
    </Col>
  )
}

export default PaginationAlignment
