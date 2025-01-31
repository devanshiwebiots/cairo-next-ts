import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BasicAreaCharts } from '@/Constant'
import { BasicApexChart } from '@/Data/Charts/ApexChart'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'

const BasicAreaChart = () => {
  return (
   <Col sm='12' xl='6' className='box-col-6'>
     <Card>
        <CommonCardHeader title={BasicAreaCharts} headClass='pb-0'/>
        <CardBody>
        <div id="basic-apex" >
                <ReactApexChart options={BasicApexChart} series={BasicApexChart.series} type='area' height={350} />
              </div>
        </CardBody>
     </Card>
   </Col>
  )
}

export default BasicAreaChart
