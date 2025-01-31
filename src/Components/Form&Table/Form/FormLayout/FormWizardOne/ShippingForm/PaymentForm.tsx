import ShowError from '@/Components/Other/common/ShowError'
import { PaymentInformation, ProceedToNext } from '@/Constant'
import { BillingFormProp } from '@/Types/FormType'
import React, { ChangeEvent, Fragment, useState } from 'react'
import { Button, Col, Row } from 'reactstrap'
import CashOnDelivery from './CashOnDelivery'
import CreditCardOption from './CreditCardOption'
import PayPalOption from './PayPalOption'

const PaymentForm: React.FC<BillingFormProp> = ({ callbackActive}) => {
    const [paymentMethodName, setPaymentMethodName] = useState('')
    
    const getUserData = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPaymentMethodName(value)
    }

    const handleNextButton = () => {
        if(paymentMethodName !== '') {
            callbackActive(4)
        }else {
            ShowError()
        }
    }
  return (
  <Fragment>
    <h5>{PaymentInformation}</h5>
    <p className='f-light'>Fill up the following information to send you the order</p>
    <div className='payment-info-wrapper'>
        <Row className='shipping-method g-3'>
        <PayPalOption paymentMethodName={paymentMethodName} getUserData={getUserData}/>
        <CreditCardOption paymentMethodName={paymentMethodName} getUserData={getUserData}/>
        <CashOnDelivery paymentMethodName={paymentMethodName} getUserData={getUserData}/>
        <Col xs="12" className="text-end">
            <Button color="primary" onClick={handleNextButton} className="btn-">{ProceedToNext}<i className="fa fa-truck proceed-next pe-2" /></Button>
          </Col>
        </Row>
    </div>
  </Fragment>
  )
}

export default PaymentForm
