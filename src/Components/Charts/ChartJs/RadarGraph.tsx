import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { RadarGraphs } from '@/Constant'
import { Radar } from "react-chartjs-2";
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { RadarGraphChartData } from '@/Data/Charts/ChartJs';

const RadarGraph = () => {
  return (
   <Col xl='6' md='12' className='box-col-6'>
    <Card>
        <CommonCardHeader title={RadarGraphs} headClass='pb-0'/>
        <CardBody className='chart-block'>
        <Radar id="myRadarGraph" data={RadarGraphChartData} options={RadarGraphChartData.options} width={778} height={400} />
        </CardBody>
    </Card>
   </Col>
  )
}

export default RadarGraph
