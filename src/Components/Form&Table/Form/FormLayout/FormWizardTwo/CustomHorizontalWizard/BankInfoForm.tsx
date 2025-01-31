import ShowError from '@/Components/Other/common/ShowError'
import { AadhaarNumberr, AadharPlaceholder, Continue, PAN, PanPlaceholder, Previous } from '@/Constant'
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks'
import { setBankDetailsForm } from '@/Redux/Reducers/FormWizardTwoSlice'
import { BusinessFormCommonProps } from '@/Types/FormType'
import React, { ChangeEvent } from 'react'
import { Button, Col, Form, Input, Label, Row } from 'reactstrap'
import BankLogoList from './BankLogoList'

const BankInfoForm: React.FC<BusinessFormCommonProps> = ({callbackActive}) => {
    const {bankDetailsForm} = useAppSelector((state) => state.formWizardTwo)
  const { aadhaarNumber, panNumber, bankName } = bankDetailsForm;
    const dispatch = useAppDispatch();

    const getUserData = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = name === 'rememberNextTime' ? e.target.checked : e.target.value;
        dispatch(setBankDetailsForm({...bankDetailsForm, [name] : value}))
    }

    const handleNextButton = () => {
        if(aadhaarNumber !== '' && panNumber !== '' && bankName !== '') {
            callbackActive(3)
        }else {
            ShowError()
        }
    }
  return (
     <Form onSubmit={(e) => e.preventDefault()} className='needs-validation' noValidate>
       <Row className='g-3'>
       <Col sm="6" className="bank-search">
          <Label check>{AadhaarNumberr}<span className="txt-danger">*</span></Label>
          <Input value={aadhaarNumber} name="aadhaarNumber" onChange={getUserData} type="search" placeholder={AadharPlaceholder} />
        </Col>
        <Col sm="6" className="bank-search">
          <Label check>{PAN}<span className="txt-danger">*</span></Label>
          <Input type="search" placeholder={PanPlaceholder} value={panNumber} name="panNumber" onChange={getUserData} />
        </Col>
        <BankLogoList getUserData={getUserData}/>
        <Col xs="12" className="text-end mt-3">
          <Button color="primary" onClick={() => callbackActive(1)}>{Previous}</Button>
          <Button className="ms-1" color="primary" onClick={handleNextButton}>{Continue}</Button>
        </Col>
       </Row>
     </Form>
  )
}

export default BankInfoForm
