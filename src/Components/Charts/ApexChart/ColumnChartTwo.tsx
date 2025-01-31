import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { ColumnCharts } from '@/Constant'
import { ColumnChartTwoData } from '@/Data/Charts/ApexChart'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'

const ColumnChartTwo = () => {
  return (
     <Col sm='12' xl='12' className='box-col-6'>
        <Card>
            <CommonCardHeader title={ColumnCharts} headClass='pb-0'/>
            <CardBody>
                <div className='annotationchart'>
                <ReactApexChart options={ColumnChartTwoData} series={ColumnChartTwoData.series} type='line' height={350} />
                </div>
            </CardBody>
        </Card>
     </Col>
  )
}

export default ColumnChartTwo
