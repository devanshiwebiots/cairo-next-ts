import { Projectcreated } from '@/Constant'
import { ProjectCreatedChart } from '@/Data/Widgets/General'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'
import DashboardCommonHeader from '../../Dashboard/common/DashboardCommonHeader'

const ProjectCreated = () => {
  return (
   <Col md='6'>
    <Card>
        <DashboardCommonHeader title={Projectcreated}/>
        <CardBody className='p-0'>
            <ReactApexChart type="area" options={ProjectCreatedChart} series={ProjectCreatedChart.series} id='our-growth'height={310}/>
        </CardBody>
    </Card>
   </Col>
  )
}

export default ProjectCreated
