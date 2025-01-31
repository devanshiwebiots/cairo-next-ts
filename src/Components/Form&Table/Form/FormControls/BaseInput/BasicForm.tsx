import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { CheckMeOut, EmailLabel, EmailPlaceHolder, FormBasic, PasswordLabel, PasswordPlaceholder, SignInButton } from '@/Constant'
import { BasicFormData } from '@/Data/Form& Table/Form'
import React from 'react'
import { Button, Card, CardBody, Col, Form, Input, Label, Row } from 'reactstrap'

const BasicForm = () => {
  return (
    <Col md='6'>
        <Card>
            <CommonCardHeader title={FormBasic} span={BasicFormData} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <div className='card-wrapper border rounded-3'>
                    <Form onClick={(e) => e.preventDefault()}>
                        <Row className='g-3'>
                            <Col md='12'>
                                <Label check>{EmailLabel}</Label>
                                <Input type='text' placeholder={EmailPlaceHolder}/>
                            </Col>
                            <Col ms='12'>
                                <Label check>{PasswordLabel}</Label>
                                <Input type='text' placeholder={PasswordPlaceholder}/>
                            </Col>
                            <Col sm='12'>
                                <div className='form-check checkbox-checked'>
                                    <Input type='checkbox' id='gridCheck1'/>
                                    <Label check htmlFor='gridCheck1'>{CheckMeOut}</Label>
                                </div>
                            </Col>
                            <Col sm='12'>
                                <Button color='primary'>{SignInButton}</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default BasicForm
