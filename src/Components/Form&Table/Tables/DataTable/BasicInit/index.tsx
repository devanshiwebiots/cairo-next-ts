import React from 'react'
import { Container, Row } from 'reactstrap'
import ScrollVerticalDynamicHeight from './ScrollVerticalDynamicHeight'
import StateSaving from './StateSaving'
import ZeroConfigurationTable from './ZeroConfigurationTable'

const BasicInitContainer = () => {
  return (
    <Container fluid>
        <Row>
            <ZeroConfigurationTable />
            <StateSaving />
            <ScrollVerticalDynamicHeight />
        </Row>
    </Container>
  )
}

export default BasicInitContainer
