import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { AreaCharts } from '@/Constant'
import { AreChartOneData, AreChartOneDataOption } from '@/Data/Charts/GoogleChart'
import React from 'react'
import Chart from 'react-google-charts'
import { Card, CardBody, Col } from 'reactstrap'

const AreaChart = () => {
  return (
   <Col sm='12' xl='6' className='box-col-6'>
    <Card>
        <CommonCardHeader title={AreaCharts} headClass='pb-0'/>
        <CardBody className='p-0 chart-block'>
            <div className='chart-overflow' id='area-chart1'>
            <Chart chartType="AreaChart" width="100%" height="400px" data={AreChartOneData} options={AreChartOneDataOption} />
            </div>
        </CardBody>
    </Card>
   </Col>
  )
}

export default AreaChart
