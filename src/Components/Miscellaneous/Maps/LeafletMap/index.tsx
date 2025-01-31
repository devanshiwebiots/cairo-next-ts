import React from 'react'
import { Container, Row } from 'reactstrap'
import AustraliaMap from './AustraliaMap'
import IndianMap from './IndianMap'
import USAMaps from './USAMaps'
import WorldMaps from './WorldMaps'

const LeafletMapContainer = () => {
  return (
     <Container fluid>
        <Row>
         <WorldMaps />
         <USAMaps />
         <IndianMap />
         <AustraliaMap />
        </Row>
     </Container>
  )
}

export default LeafletMapContainer
