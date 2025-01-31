import { Comment, Email, EnterYourEmail, EnterYourName, EnterYourWebsite, Name, PostComment, Website, WriteAComment } from '@/Constant'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const LeaveYourCommentBody = () => {
  return (
     <Form className='default-form'>
        <Row>
            <Col md='4' sm='4'>
                <FormGroup>
                    <Label htmlFor='name'>{Name}</Label>
                    <Input id='name' type='text' placeholder={EnterYourName} required/>
                </FormGroup>
            </Col>
            <Col md='4' sm='4'>
                <FormGroup>
                    <Label htmlFor='email'>{Email}</Label>
                    <Input id='email' type='email' placeholder={EnterYourEmail} required/>
                </FormGroup>
            </Col>
            <Col md='4' sm='4'>
                <FormGroup>
                    <Label htmlFor='emailid'>{Website}</Label>
                    <Input id='emailid' type='text' placeholder={EnterYourWebsite} required/>
                </FormGroup>
            </Col>
            <Col sm='12'>
                <FormGroup>
                    <Label htmlFor='exampleFormControlTextarea1'>{Comment}</Label>
                    <Input id='exampleFormControlTextarea1' placeholder={WriteAComment} rows={6} type='textarea'/>
                </FormGroup>
                 <Button color='primary'>{PostComment}</Button>
            </Col>
        </Row>
     </Form>
  )
}

export default LeaveYourCommentBody
