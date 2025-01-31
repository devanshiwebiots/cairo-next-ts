import { AadharPlaceholder, AboveInformationCorrect, CardNumberr, CVVNumber, Expiration, ExpiryPlaceholder, PlaceHolderNamee, UploadDocumentation } from '@/Constant';
import { NumberingWizardPropsType } from '@/Types/FormType';
import React from 'react';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const CartInfoForm: React.FC<NumberingWizardPropsType> = ({getUserData, basicInputFormValue}) => {
  const { placeHolderName, cardNumber, expiration, cvvNumber } = basicInputFormValue;
  return (
   <Form className='stepper-two needs-validation custom-input' noValidate>
    <Row>
        <Col md='12'>
            <FormGroup>
                <Label check  className='mb-1'>{PlaceHolderNamee}</Label>
                <Input name='placeHolderName' value={placeHolderName} type='text' onChange={getUserData} placeholder={PlaceHolderNamee}/>
            </FormGroup>
        </Col>
        <Col xxl='4' sm='6'>
            <FormGroup>
                <Label check className='mb-1'>{CardNumberr}</Label>
                <Input name='cardNumber' value={cardNumber} onChange={getUserData} placeholder={AadharPlaceholder} type='text'/>
            </FormGroup>
        </Col>
        <Col xxl='4' sm='6'>
            <FormGroup>
                <Label check className='mb-1'>{Expiration}</Label>
                <Input name='expiration' value={expiration} onChange={getUserData} placeholder={ExpiryPlaceholder} type='number'/>
            </FormGroup>
        </Col>
        <Col xxl='4'>
            <FormGroup>
                <Label check className='mb-1'>{CVVNumber}</Label>
                <Input name='cvvNumber' value={cvvNumber} onChange={getUserData} type='text'/>
            </FormGroup>
        </Col>
        <Col xs='12'>
            <FormGroup>
                <Label check className='mb-1'>{UploadDocumentation}</Label>
                <Input name='uploadDocumentation' onChange={getUserData} type='file'/>
            </FormGroup>
        </Col> 
        <Col xs='12'>
            <FormGroup check>
            <Input id="invalidCheck-a" name="informationCheckBox" onChange={getUserData} type="checkbox" required />
            <Label htmlFor="invalidCheck-a" check>
              {AboveInformationCorrect}
            </Label>
            </FormGroup>
        </Col>
    </Row>
   </Form>
  )
}

export default CartInfoForm
