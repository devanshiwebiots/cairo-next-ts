import React from 'react'
import { Container, Row } from 'reactstrap'
import BarChart from './BarChart'
import DoughnutChart from './DoughnutChart'
import LineChart from './LineChart'
import LineGraph from './LineGraph'
import PolarChart from './PolarChart'
import RadarGraph from './RadarGraph'

const ChartJsContainer = () => {
  return (
    <Container fluid>
        <Row>
            <BarChart />
            <LineGraph />
            <RadarGraph />
            <LineChart />
            <DoughnutChart />
            <PolarChart />
        </Row>
    </Container>
  )
}

export default ChartJsContainer
