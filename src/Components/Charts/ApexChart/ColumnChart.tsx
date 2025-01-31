import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { ColumnCharts } from '@/Constant'
import { ColumnChartData } from '@/Data/Charts/ApexChart'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'

const ColumnChart = () => {
  return (
     <Col sm='12' xl='6' className='box-col-6'>
        <Card>
            <CommonCardHeader title={ColumnCharts} headClass='pb-0'/>
            <CardBody>
                <div id='column-chart'>
                <ReactApexChart options={ColumnChartData} series={ColumnChartData.series} type="bar" height={350} />
                </div>
            </CardBody>
        </Card>
     </Col>
  )
}

export default ColumnChart
