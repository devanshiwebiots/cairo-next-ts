import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { GanttCharts } from '@/Constant'
import { GanttChartData, GanttChartDataOption } from '@/Data/Charts/GoogleChart'
import React from 'react'
import Chart from 'react-google-charts'
import { Card, CardBody, Col } from 'reactstrap'

const GanttChart = () => {
  return (
   <Col sm='12' className='box-col-12'>
    <Card>
        <CommonCardHeader title={GanttCharts} headClass='pb-0'/>
        <CardBody className='chart-block'>
            <div className='chart-overflow' id='gantt_chart'>
            <Chart chartType="Gantt" width="100%" height="280px" data={GanttChartData} options={GanttChartDataOption} />
            </div>
        </CardBody>
    </Card>
   </Col>
  )
}

export default GanttChart
