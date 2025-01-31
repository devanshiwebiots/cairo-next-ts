import { ClientName, ClientNamePlaceholder, ProjectTitle, ProjectTitlePlaceholder } from '@/Constant'
import { Field, ErrorMessage } from "formik";
import React, { Fragment } from 'react'
import { Col, FormGroup, Label, Row } from 'reactstrap'

const TitleAndClientSection = () => {
  return (
   <Fragment>
    <Row>
        <Col>
        <FormGroup>
            <Label>{ProjectTitle}</Label>
            <Field name='title' type='text' className='form-control' placeholder={ProjectTitlePlaceholder}/>
            <ErrorMessage name='title' component='span' className='text-danger'/>
        </FormGroup> 
        </Col>
    </Row>
    <Row>
        <Col>
        <FormGroup>
            <Label>{ClientName}</Label>
            <Field name='client' type='text' className='form-control' placeholder={ClientNamePlaceholder}/>
            <ErrorMessage name='client' component='span' className='text-danger'/>
        </FormGroup>
        </Col>
    </Row>
   </Fragment>
  )
}

export default TitleAndClientSection
