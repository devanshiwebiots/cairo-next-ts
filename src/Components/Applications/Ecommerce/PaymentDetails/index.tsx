
import React from 'react'
import { Container, Row } from 'reactstrap'
import CodForm from './CodForm'
import CreditCard from './CreditCard'
import DebitCard from './DebitCard'
import EmiForm from './EmiForm'
import NetBanking from './NetBanking'

const PaymentProductContainer = () => {
  return (
    <Container fluid className='credit-card'>
        <Row>
            <CreditCard />
            <DebitCard />
            <CodForm />
            <EmiForm />
            <NetBanking />
        </Row>
    </Container>
  )
}

export default PaymentProductContainer
