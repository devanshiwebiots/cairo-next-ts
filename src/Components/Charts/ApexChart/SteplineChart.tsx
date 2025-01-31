import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { SteplineCharts } from '@/Constant'
import { SteplineChartData } from '@/Data/Charts/ApexChart'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'

const SteplineChart = () => {
  return (
   <Col sm='12' xl='6' className='box-col-6'>
    <Card>
        <CommonCardHeader title={SteplineCharts} headClass='pb-0'/>
        <CardBody>
            <div className='stepline'>
            <ReactApexChart options={SteplineChartData} series={SteplineChartData.series} type='line' height={350} />
            </div>
        </CardBody>
    </Card>
   </Col>
  )
}

export default SteplineChart
