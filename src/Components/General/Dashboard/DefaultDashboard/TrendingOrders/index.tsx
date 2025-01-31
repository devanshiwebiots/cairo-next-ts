import { Trendingorder } from '@/Constant'
import React from 'react'
import { Card, Col } from 'reactstrap'
import DashboardCommonHeader from '../../common/DashboardCommonHeader'
import { TrendingOrderHead } from './TrendingOrderHead'
import { TrendingOrdersBody } from './TrendingOrdersBody'

const TrendingOrders = () => {
  return (
   <Col xl='6' lg='7'>
    <Card className='recent-order'>
        <DashboardCommonHeader title={Trendingorder}/>
      <div className='card-body'>
        <TrendingOrderHead />
        <TrendingOrdersBody />
      </div>
    </Card>
   </Col>
  )
}

export default TrendingOrders
