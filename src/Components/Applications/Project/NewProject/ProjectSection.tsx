import { FixPrice, High, Hourly, Low, Medium, Priority, PriorityPlaceholder, ProjectProgress, ProjectProgressPlaceholder, ProjectStatus, Urgent } from '@/Constant';
import { ErrorMessage, Field } from "formik";
import { Col, FormGroup, Label, Row } from 'reactstrap';

const ProjectSection = () => {
  return (
   <Row>
    <Col sm='4'>
        <FormGroup>
            <Label>{ProjectProgress}</Label>
            <Field name='progress' type='number' className='form-control' placeholder={ProjectProgressPlaceholder}/>
            <ErrorMessage name='progress' component='span' className='text-danger'/>
        </FormGroup>
    </Col>
    <Col sm='4'>
        <FormGroup>
            <Label>{ProjectStatus}</Label>
            <Field name='type' as='select' className='form-control form-select'>
                <option value={Hourly}>{Hourly}</option>
                <option value={FixPrice}>{FixPrice}</option>
            </Field>
        </FormGroup>
    </Col>
    <Col sm='4'>
        <FormGroup>
            <Label>{Priority}</Label>
            <Field name='priority' as='select' placeholder={PriorityPlaceholder} className='form-control form-select'>
            <option value={Low}>{Low}</option>
            <option value={Medium}>{Medium}</option>
            <option value={High}>{High}</option>
            <option value={Urgent}>{Urgent}</option>
            </Field>
        </FormGroup>
    </Col>
   </Row>
  )
}

export default ProjectSection
