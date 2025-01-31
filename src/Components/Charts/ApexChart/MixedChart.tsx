import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { MixedCharts } from '@/Constant'
import { MixedChartsData } from '@/Data/Charts/ApexChart'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'

const MixedChart = () => {
  return (
    <Col sm='12' xl='12' className='box-col-12'>
        <Card>
            <CommonCardHeader title={MixedCharts} headClass='pb-0'/>
            <CardBody>
                <div id='mixedchart'>
                <ReactApexChart options={MixedChartsData} series={MixedChartsData.series} type='line' height={350} />
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default MixedChart
