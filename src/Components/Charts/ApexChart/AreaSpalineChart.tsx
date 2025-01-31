import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { AreaSpalineCharts } from '@/Constant'
import { AreaSpalineChartsData } from '@/Data/Charts/ApexChart'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'

const AreaSpalineChart = () => {
  return (
    <Col sm='12' xl='6' className='box-col-6'>
        <Card>
            <CommonCardHeader title={AreaSpalineCharts} headClass='pb-0'/>
            <CardBody>
                <div className='area-spaline'>
                <ReactApexChart options={AreaSpalineChartsData} series={AreaSpalineChartsData.series} type='area' height={350} />
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default AreaSpalineChart
