import React from 'react'
import { Container, Row } from 'reactstrap'
import DefaultStyle from './DefaultStyle'
import HorizontalStyle from './HorizontalStyle'
import InlineStyle from './InlineStyle'
import OfferStyleBorder from './OfferStyleBorder'
import SolidBorderStyle from './SolidBorderStyle'
import VariationCheckbox from './VariationCheckbox'
import VariationRadio from './VariationRadio'
import VerticalStyle from './VerticalStyle'
import WithoutBordersStyle from './WithoutBordersStyle'

const MegaOptionContainer = () => {
  return (
    <Container fluid>
        <Row>
            <VariationRadio />
            <VariationCheckbox />
            <DefaultStyle />
            <WithoutBordersStyle />
            <SolidBorderStyle />
            <OfferStyleBorder />
            <InlineStyle />
            <VerticalStyle />
            <HorizontalStyle />
        </Row>
    </Container>
  )
}

export default MegaOptionContainer
