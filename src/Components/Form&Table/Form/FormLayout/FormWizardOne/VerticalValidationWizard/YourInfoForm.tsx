import ShowError from '@/Components/Other/common/ShowError'
import { AgreeToTermsAndConditions, ContactNumber, Email, EnterMobileNumber, EnterYourFirstName, EnterYourLastName, FirstName, LastName, MofiEmail, Next, State, Zip, ZipCode } from '@/Constant'
import { VerticalValidationWizardFormPropsType } from '@/Types/FormType'
import React, { ChangeEvent, useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const YourInfoForm : React.FC<VerticalValidationWizardFormPropsType>= ({activeCallBack}) => {
    const FormValue = {
        firstName: '',
        lastName: '',
        contact: '',
        email: '',
        state: '',
        zip: ''
    }
    const [yourInfoForm, setYourInfoForm] = useState(FormValue)
    const { firstName, lastName, contact, email, state, zip } = yourInfoForm;
 
    const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = name === 'rememberNextTime' ? event.target.checked : event.target.value;
    setYourInfoForm({...yourInfoForm, [name] : value})
    }
    const handleNextButton = () => {
        if(firstName !== '' && lastName !== '' && contact !== '' && email !== '' && state !== '' && zip !== '')  activeCallBack(2)
       else {
    ShowError()
}
    }
  return (
    <Form className='needs-validation custom-input' noValidate>
        <Row>
            <Col xxl='4' sm='6'>
                <FormGroup>
                    <Label check className='mb-1'>{FirstName}<span className='txt-danger'>*</span></Label>
                    <Input type='text' placeholder={EnterYourFirstName} name='firstName' value={firstName} onChange={getUserData}/>
                </FormGroup>
            </Col>
            <Col xxl='4' sm='6'>
                <FormGroup>
                    <Label check className='mb-1'>{LastName}<span className='txt-danger'>*</span></Label>
                    <Input type='text' placeholder={EnterYourLastName} name='lastName' value={lastName} onChange={getUserData}/>
                </FormGroup>
            </Col>
            <Col xxl='4' sm='6'>
                <FormGroup>
                    <Label check className='mb-1'>{Email}<span className='txt-danger'>*</span></Label>
                    <Input type='email' placeholder={MofiEmail} name='email' value={email} onChange={getUserData}/>
                </FormGroup>
            </Col>
            <Col xxl='5' sm='6'>
                <FormGroup>
                    <Label  check className='mb-1'>{State}</Label>
                    <Input type='select' name='state' value={state} onChange={getUserData}>
                        <option value={''}>Choose...</option>
                        <option value={'USA'}>USA</option>
                        <option value={'U.K'}>U.K</option>
                        <option value={'U.S'}>U.S</option>
                    </Input>
                </FormGroup>
            </Col>
            <Col xxl='5' sm='6'>
                <FormGroup>
                    <Label check className='mb-1'>{ZipCode}</Label>
                    <Input type='text' name='zip' value={zip} onChange={getUserData}/>
                </FormGroup>
            </Col>
            <Col xxl='4' sm='6'>
               <FormGroup>
               <Label check className='mb-1'>{ContactNumber}</Label>
                <Input type='number' placeholder={EnterMobileNumber} name='contact' value={contact} onChange={getUserData}/>
               </FormGroup>
            </Col>
            <Col xs='12'>
                <FormGroup check>
                    <Input id="invalidCheck-n" type='checkbox' required/>
                    <Label htmlFor='invalidCheck-n' check>{AgreeToTermsAndConditions}</Label>
                </FormGroup>
            </Col>
            <Col xs="12" className="text-end">
          <Button color="primary" onClick={handleNextButton}>{Next}</Button>
        </Col>
        </Row>
    </Form>
  )
}

export default YourInfoForm
