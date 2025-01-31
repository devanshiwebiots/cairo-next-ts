import React from 'react'
import { Container, Row } from 'reactstrap'
import EnableFlexBehaviors from './EnableFlexBehaviors'
import GridForColumns from './GridForColumns'
import GridOptions from './GridOptions'
import HorizontalAlignment from './HorizontalAlignment'
import HorizontalGutters from './HorizontalGutters'
import Nesting from './Nesting'
import NoGutters from './NoGutters'
import Offset from './Offset'
import Order from './Order'
import RowColumnsGutters from './RowColumnsGutters'
import VerticalAlignment from './VerticalAlignment/VerticalAlignment'
import VerticalGutters from './VerticalGutters'

const GridContainer = () => {
  return (
    <Container fluid>
        <Row>
            <GridOptions />
            <GridForColumns />
            <EnableFlexBehaviors />
            <HorizontalGutters />
            <VerticalGutters />
            <RowColumnsGutters />
            <NoGutters />
            <VerticalAlignment />
            <HorizontalAlignment />
            <Nesting />
            <Order />
            <Offset />
        </Row>
    </Container>
  )
}

export default GridContainer
