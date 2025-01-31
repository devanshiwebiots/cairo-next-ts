import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { PieCharts } from '@/Constant'
import { PieChartData } from '@/Data/Charts/ApexChart'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'

const PieChart = () => {
  return (
    <Col sm='12' xl='6' className='box-col-6'>
        <Card className='custom-pie-chart'>
            <CommonCardHeader title={PieCharts} headClass='pb-0'/>
            <CardBody>
                <div id='piechart'> 
                <ReactApexChart options={PieChartData} series={PieChartData.series} type='pie' width={380} />
                </div> 
            </CardBody>
        </Card>
    </Col>
  )
}

export default PieChart
