import ShowError from '@/Components/Other/common/ShowError'
import { BillingInformation, FillFollowingInformation, ProceedToNext } from '@/Constant'
import { BillingFormProp } from '@/Types/FormType'
import React, { ChangeEvent, Fragment, useState } from 'react'
import { Button, Col, Form, Row } from 'reactstrap'
import BillingUserDetail2 from './BillingUserDetail2'
import BillingUserDetails1 from './BillingUserDetails1'

const BillingForm: React.FC<BillingFormProp> = ({callbackActive}) => {
    const FormValue = {
    firstName: '', lastName: '', contact: '', email: '', address:'',country:'', state:'', zip: '',rememberNextTime: false,otherNotes: ''
    }
    const [studentValidationForm, setStudentValidationForm] = useState(FormValue)
  const { firstName, lastName, contact, email, address, country, state, zip, rememberNextTime, otherNotes } = studentValidationForm;

  const getUserData = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = name === 'rememberNextTime' ? e.target.checked : e.target.value;
    setStudentValidationForm({...studentValidationForm, [name] : value})
  }

  const handleNextButton = () => {
     if(firstName !== '' && lastName !== '' && contact !== '' && email !== '' && address !== '' && country !== '' && state !== '' && zip !== '' && rememberNextTime !== false && otherNotes !== '') {
        callbackActive(2)
     }else {
        ShowError()
     }
  }
  return (
   <Fragment>
     <h6>{BillingInformation}</h6>
     <p className='f-light'>{FillFollowingInformation}</p>
     <Form onSubmit={(e) => e.preventDefault()} className='g-3 needs-validation' noValidate>
        <Row>
            <BillingUserDetails1 studentValidationForm={studentValidationForm} getUserData={getUserData}/>
            <BillingUserDetail2 studentValidationForm={studentValidationForm} getUserData={getUserData}/>
            <Col xs="12" className="text-end mt-2">
            <Button onClick={handleNextButton} color="primary">{ProceedToNext}<i className="fa fa-truck proceed-next pe-2" /></Button>
          </Col>
        </Row>
     </Form>
   </Fragment>
  )
}

export default BillingForm
