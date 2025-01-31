import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { DoughnutCharts } from '@/Constant'
import { DoughnutChartData, DoughnutChartDataOption } from '@/Data/Charts/ChartJs'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Card, CardBody, Col } from 'reactstrap'

const DoughnutChart = () => {
  return (
     <Col xl='6' ms='12' className='box-col-12'>
        <Card>
            <CommonCardHeader title={DoughnutCharts} headClass='pb-0'/>
            <CardBody className='chart-block'>
            <Doughnut id="myDoughnutGraph" data={DoughnutChartData} options={DoughnutChartDataOption} width={734} height={335} />
            </CardBody>
        </Card>
     </Col>
  )
}

export default DoughnutChart
