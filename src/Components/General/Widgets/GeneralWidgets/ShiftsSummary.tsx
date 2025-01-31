import { ShiftSummarys } from '@/Constant'
import { ShiftsSummaryChart, ShiftsSummaryData } from '@/Data/Widgets/General'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col, Row } from 'reactstrap'
import DashboardCommonHeader from '../../Dashboard/common/DashboardCommonHeader'

const ShiftsSummary = () => {
  return (
    <Col xl='4' sm='6'>
        <Card className='shifts-char-box'>
            <DashboardCommonHeader title={ShiftSummarys}/>
            <CardBody>
                <Row className='align-items-center'>
                 <Col xl='7' className='shifts-chart'>
                    <div className='overview'>
                    <ReactApexChart id='shifts-summary' options={ShiftsSummaryChart} series={ShiftsSummaryChart.series} type="donut" width={260} height={272.5}/>
                    </div>
                 </Col> 
                 <Col xl='5' className='shifts-overview'>
                   {ShiftsSummaryData?.map((data, index) => (
                     <div className='d-flex gap-2' key={index}>
                     <div className='flex-shrink-0'><span className={`bg-${data.color}`}></span></div>
                     <div className='flex-grow-1'>
                        <h6>{data.title}</h6>
                     </div><span>{data.score}</span>
                 </div>
                   ))}
                 </Col>
                </Row>
            </CardBody>
        </Card>
    </Col>
  )
}

export default ShiftsSummary
