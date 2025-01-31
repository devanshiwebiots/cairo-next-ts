import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { RadialBarCharts } from '@/Constant'
import { RadialBarChartData } from '@/Data/Charts/ApexChart'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'

const RadialBarChart = () => {
  return (
     <Col sm='12' xl='6' className='box-col-6'>
        <Card>
            <CommonCardHeader title={RadialBarCharts} headClass='pb-0'/>
            <CardBody>
                <div id='circlechart' className='my-0'>
                <ReactApexChart options={RadialBarChartData} series={RadialBarChartData.series} type='radialBar' height={350} />
                </div>
            </CardBody>
        </Card>
     </Col>
  )
}

export default RadialBarChart
