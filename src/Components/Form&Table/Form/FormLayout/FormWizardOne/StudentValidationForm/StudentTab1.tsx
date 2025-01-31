import { ConfirmPassword, Email, EnterConfirmPassword, EnterPassword, EnterYourFirstName, EnterYourName, MofiEmail, Name, Password } from '@/Constant';
import { StudentTabProp } from '@/Types/FormType'
import React from 'react'
import { Col, Input, Label, Row } from 'reactstrap';

const StudentTab1: React.FC<StudentTabProp> = ({studentValidationForm, getUserData}) => {
  const { password, name, email, confirmPassWord } = studentValidationForm;

  return (
    <Row className='g-3'>
        <Col sm='6'>
            <Label check className='mb-1'>{Name}</Label>
            <Input onChange={getUserData} value={name} name='name' type='text' placeholder={EnterYourName}/>
        </Col>
        <Col sm='6'>
            <Label check className='mb-1'>{Email}<span className='txt-danger'>*</span></Label>
            <Input onChange={getUserData} value={email} name='email' type='email' placeholder={MofiEmail}/>
        </Col>
        <Col xs='12'>
            <Label check className='mb-1'>{Password}<span className='txt-danger'>*</span></Label>
            <Input onChange={getUserData} value={password} name='password' type='password' placeholder={EnterPassword} autoComplete='off'/>
        </Col>
        <Col xs='12'>
            <Label check className='mb-1'>{ConfirmPassword}<span className='txt-danger'>*</span></Label>
            <Input onChange={getUserData} value={confirmPassWord} name='confirmPassWord' type='password' placeholder={EnterConfirmPassword} autoComplete='off'/>
        </Col>
    </Row>
  )
}

export default StudentTab1
