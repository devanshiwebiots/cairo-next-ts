import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { DonutCharts } from '@/Constant'
import { DountChartsData } from '@/Data/Charts/ApexChart'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'

const DonutChart = () => {
  return (
    <Col sm='12' xl='6' className='box-col-6'>
        <Card className='custom-pie-chart'>
            <CommonCardHeader title={DonutCharts} headClass='pb-0'/>
            <CardBody> 
                <div id='donutchart'>
                <ReactApexChart options={DountChartsData} series={DountChartsData.series} type='donut' width={380} />
                </div>
            </CardBody>
        </Card> 
    </Col>
  )
}

export default DonutChart
