import { Latestsales } from '@/Constant'
import { LatestSalesChart } from '@/Data/Ecommerce'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'
import DashboardCommonHeader from '../common/DashboardCommonHeader'

const LatestSales = () => {
  return (
    <Col md='6' className='box-col-6'>
        <Card>
            <DashboardCommonHeader title={Latestsales}/>
            <CardBody className='pt-0'>
               <ReactApexChart options={LatestSalesChart} series={LatestSalesChart.series} type="rangeBar"  height={320}/>
            </CardBody>
        </Card>
    </Col>
  )
}

export default LatestSales
