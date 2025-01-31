import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { RadarCharts } from '@/Constant'
import { RadarChartsData } from '@/Data/Charts/ApexChart'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'

const RadarChart = () => {
  return (
    <Col sm='12' xl='6' className='box-col-6'>
        <Card>
            <CommonCardHeader title={RadarCharts} headClass='pb-0'/>
            <CardBody>
                <div id='radarchart'>
                <ReactApexChart options={RadarChartsData} series={RadarChartsData.series} type='radar' height={350} />
                </div>
            </CardBody>
        </Card> 
    </Col>
  )
}

export default RadarChart
