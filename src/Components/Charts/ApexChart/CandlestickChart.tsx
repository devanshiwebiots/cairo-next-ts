import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { CandlestickCharts } from '@/Constant'
import { CandlestickChartsData } from '@/Data/Charts/ApexChart'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'

const CandlestickChart = () => {
  return (
    <Col sm='12' xl='12' className='box-col-12'>
        <Card>
            <CommonCardHeader title={CandlestickCharts} headClass='pb-0'/>
            <CardBody>
                <div id='candlestick'>
            <ReactApexChart options={CandlestickChartsData} series={CandlestickChartsData.series} type='candlestick' height={350} />
            </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default CandlestickChart
