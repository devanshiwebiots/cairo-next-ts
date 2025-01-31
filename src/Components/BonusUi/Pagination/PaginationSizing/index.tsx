import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { PaginationSizings } from '@/Constant'
import { SizingPaginationData } from '@/Data/BonusUi/Paginations'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DynamicPaginationSizing from './DynamicPaginationSizing'
import StaticPaginationSizing from './StaticPaginationSizing'

const PaginationSizing = () => {
  return (
    <Col xl='6'>
        <Card className='height-equal'>
            <CommonCardHeader title={PaginationSizings} span={SizingPaginationData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody className='pb-4'>
                <StaticPaginationSizing />
                <DynamicPaginationSizing />
            </CardBody>
        </Card>
    </Col>
  )
}

export default PaginationSizing
