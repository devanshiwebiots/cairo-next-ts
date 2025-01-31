import React from 'react'
import { Container, Row } from 'reactstrap'
import EmailVerification from './EmailVerification'
import TwoFactorAuthentication from './TwoFactorAuthentication'

const TwoFactorContainer = () => {
  return (
    <Container fluid>
        <Row>
            <TwoFactorAuthentication />
            <EmailVerification />
        </Row>
    </Container>
  )
}

export default TwoFactorContainer
