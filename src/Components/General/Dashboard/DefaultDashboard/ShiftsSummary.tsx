import { Summary } from '@/Constant'
import React from 'react'
import { Col, Row } from 'reactstrap'
import DashboardCommonHeader from '../common/DashboardCommonHeader'
import ReactApexChart from "react-apexcharts";
import { ShiftsOptionChart, ShiftsOverviewData } from '@/Data/Dashboard';


const ShiftsSummary = () => {
  return (
    <Col xl='4' md='6'>
      <div className='card shifts-char-box'>
        <DashboardCommonHeader title={Summary} />
        <div className='card-body'>
          <Row className='align-items-center'>
            <Col xs='7' className=' shifts-chart'>
              <ReactApexChart className="overview" id="shifts-overview" options={ShiftsOptionChart} series={ShiftsOptionChart.series} type="donut"  height={294} />
            </Col>
            <Col xl="5" className="shifts-overview">
              {ShiftsOverviewData.map((data, index) => (
                <div className="d-flex gap-2" key={index}>
                  <div className="flex-shrink-0">
                    <span className={`bg-${data.color}`}> </span>
                  </div>
                  <div className="flex-grow-1">
                    <h6>{data.title}</h6>
                  </div>
                  <span>{data.count}</span>
                </div>
              ))}
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  )
}

export default ShiftsSummary
