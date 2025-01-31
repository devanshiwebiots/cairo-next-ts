import { AadharPlaceholder, AllTheAboveInformationIsCorrect, CardNumberr, CVVNumber, Expiration, UploadDocumentation } from '@/Constant';
import { CardDetailProp } from '@/Types/FormType'
import React, { Fragment } from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap';

const CardDataForm: React.FC<CardDetailProp> = ({cartInfoForm, getUserData}) => {
  const { cardNumber, expirationDate, cvvNumber } = cartInfoForm;

  return (
    <Fragment>
     <Col md='4' sm='6'>
        <FormGroup>
            <Label check className='mb-1'>{CardNumberr}</Label>
            <Input type='text' placeholder={AadharPlaceholder} name='cardNumber' value={cardNumber} onChange={getUserData}/>
        </FormGroup>
     </Col>
     <Col md='4' sm='6'>
        <FormGroup>
            <Label check className='mb-1' htmlFor='validationDates'>{Expiration}</Label>
            <Input type='number' placeholder={'xx/xx'} name='expirationDate' value={expirationDate} onChange={getUserData} id='validationDates'/>
        </FormGroup>
     </Col>
     <Col md='4' sm='6'>
        <FormGroup>
            <Label check className='mb-1' htmlFor='cvvNumber-b'>{Expiration}</Label>
            <Input type='text' name='cvvNumber' value={CVVNumber} onChange={getUserData} id='cvvNumber-b'/>
        </FormGroup>
     </Col>
     <Col md="12" sm="6">
        <FormGroup>
          <Label htmlFor="formFile2" check>{UploadDocumentation}</Label>
          <Input id="formFile2" type="file" name="documentationName" onChange={getUserData} />
        </FormGroup>
      </Col>
      <Col xs="12">
        <FormGroup check className="mb-0">
          <Input id="invalidCheck-b" type="checkbox" required />
          <Label htmlFor="invalidCheck-b" check>{AllTheAboveInformationIsCorrect}</Label>
        </FormGroup>
      </Col>
    </Fragment>
  )
}

export default CardDataForm
