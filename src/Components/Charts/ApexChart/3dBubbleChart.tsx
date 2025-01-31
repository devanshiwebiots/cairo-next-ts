import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { BubbleChart3Ds } from '@/Constant'
import { BubbleChart3DData } from '@/Data/Charts/ApexChart'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'

const BubbleChart3D = () => {
  return (
    <Col sm='12' xl='6' className='box-col-12'>
        <Card>
            <CommonCardHeader title={BubbleChart3Ds} headClass='pb-0'/>
            <CardBody>
                <div className='chart-bubble'>
                <ReactApexChart options={BubbleChart3DData} series={BubbleChart3DData.series} type='bubble' height={350} />
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default BubbleChart3D
