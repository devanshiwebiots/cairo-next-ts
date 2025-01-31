import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { ChartJSBarChart } from '@/Constant'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Bar } from "react-chartjs-2";
import { ChartJsBarChartData, ChartJsBarChartDataOption } from '@/Data/Charts/ChartJs';

const BarChart = () => {
  return (
    <Col xl='6' ms='12' className='box-col-6'>
        <Card>
            <CommonCardHeader title={ChartJSBarChart} headClass='pb-0'/>
            <CardBody className='chart-block'>
                <Bar id='myBarGraph' data={ChartJsBarChartData} options={ChartJsBarChartDataOption} width={778} height={400} />
            </CardBody>
        </Card>
    </Col>
  )
}

export default BarChart
