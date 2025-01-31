import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BarCharts } from '@/Constant'
import { BarChartsData } from '@/Data/Charts/ApexChart'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'

const BarChart = () => {
  return (
     <Col sm='12' xl='6' className='box-col-6'>
        <Card>
            <CommonCardHeader title={BarCharts} headClass='pb-0'/>
            <CardBody>
                <div id='basic-bar'>
                <ReactApexChart options={BarChartsData} series={BarChartsData.series} type="bar" height={350} />
                </div>
            </CardBody>
        </Card>
     </Col>
  )
}

export default BarChart
