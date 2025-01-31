import ShowError from '@/Components/Other/common/ShowError'
import { Next, Previous } from '@/Constant'
import { VerticalValidationWizardFormPropsType } from '@/Types/FormType'
import React, { ChangeEvent, useState } from 'react'
import { Button, Col, Form, Row } from 'reactstrap'
import CardDataForm from './CardDataForm'
import CardDetails from './CardDetails'
import CardTypeDetail from './CardTypeDetail'

const CartInfoForm: React.FC<VerticalValidationWizardFormPropsType> = ({activeCallBack}) => {
    const FormValue = {
        recipientUserName: '',
        userName: '',
        cardNumber: '',
        expirationDate: '',
        cvvNumber: '',
        documentationName: ''
    }
    const [cartInfoForm, setCartInfoForm] = useState(FormValue)
  const { recipientUserName, userName, cardNumber, expirationDate, cvvNumber, documentationName } = cartInfoForm;

  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = name === 'rememberNextTime' ? event.target.checked : name === 'documentationName' ? event.target.files && event.target.files[0].name : event.target.value;
    setCartInfoForm({...cartInfoForm, [name] : value})
  }

  const handleNextButton = () => {
    if(recipientUserName !== '' && userName !== '' && cardNumber !== '' && expirationDate !== '' && cvvNumber !== '' && documentationName !== '') {
        activeCallBack(3)
    }else {
        ShowError()
    }
  }
  return (
    <Form className='g-3 needs-validation custom-input' noValidate>
        <Row>
            <CardTypeDetail />
            <CardDetails cartInfoForm={cartInfoForm} getUserData={getUserData}/>
            <CardDataForm cartInfoForm={cartInfoForm} getUserData={getUserData}/>
            <Col xs='12' className='text-end'>
                <Button color='primary' onClick={() => activeCallBack(1)}>{Previous}</Button>
                <Button color='primary' className='ms-1' onClick={handleNextButton}>{Next}</Button>
            </Col>
        </Row>
    </Form>
  )
}

export default CartInfoForm
