import { AgreeToTermsAndConditions, Github, GitHubPlaceholder, GiveFeedback, LinkedInIcon, LinkedInPlaceholder, SelectState } from '@/Constant';
import { NumberingWizardPropsType } from '@/Types/FormType'
import React from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const FeedbackForm: React.FC<NumberingWizardPropsType> = ({ getUserData, basicInputFormValue}) => {
  const { linkedInLink, gitHubLink, giveFeedBack } = basicInputFormValue;
  return (
    <Form className='stepper-three needs-validation custom-input' noValidate>
        <Row>
            <Col sm='6'>
                <FormGroup>
                    <Label check className='mb-1'>{LinkedInIcon}<span className='txt-danger'>*</span></Label>
                    <Input name='linkedInLink' value={linkedInLink} onChange={getUserData} type='url' placeholder={LinkedInPlaceholder}/>
                </FormGroup>
            </Col>
            <Col sm='6'>
                <Label check className='mb-1'>{Github}<span className='txt-danger'>*</span></Label>
                <Input name='gitHubLink' value={gitHubLink} onChange={getUserData} type='url' placeholder={GitHubPlaceholder}/>
            </Col>
            <Col xs='12'>
                <FormGroup>
                    <Label check className='mb-1'>{SelectState}<span className='txt-danger'>*</span></Label>
                    <Input type='select' name='state' onChange={getUserData}>
                        <option value={''}>Choose...</option>
                        <option value={'U.K'}>U.K</option>
                        <option value={'U.S'}>U.S</option>
                        <option value="India">India</option>
                    </Input>
                </FormGroup>
            </Col>
            <Col xs='12'>
                <FormGroup>
                    <Label className='mb-1'>{GiveFeedback}</Label>
                    <Input type='textarea' name='giveFeedBack' value={giveFeedBack} onChange={getUserData}/>
                </FormGroup>
            </Col>
            <Col xs="12">
          <FormGroup check className='mb-1'>
            <Input id="invalidCheck46" name="agreeConditions" onChange={getUserData} type="checkbox" required />
            <Label className="mb-0" htmlFor="invalidCheck46" check>{AgreeToTermsAndConditions}</Label>
          </FormGroup>
        </Col>
        </Row>
    </Form>
  )
}

export default FeedbackForm
